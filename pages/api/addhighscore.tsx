import { NextApiRequest, NextApiResponse } from 'next';
import Scoreboard from '../../middleware/models/scoreboard';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { score, mode, username } = request.body;
  try {
    const newScore = new Scoreboard({ score, mode, username });
    await newScore.save();
    try {
      const scoreboard = await Scoreboard.find({ mode })
        .sort({ score: -1 })
        .limit(10);
      if (!scoreboard) {
        return response.status(404).json({
          success: false,
          message: 'no scoreboard data after adding a highscore',
        });
      }
      return response.status(200).json({ success: true, data: scoreboard });
    } catch (e) {
      return response.status(500).json({
        success: false,
        message: 'failed to get scoreboard data after adding a highscore',
      });
    }
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add new highscore' });
  }
};
