import { NextApiRequest, NextApiResponse } from 'next';
import Scoreboard from '../../middleware/models/scoreboard';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { score, username } = request.body;
  try {
    const newScore = new Scoreboard({ score, username });
    newScore.save();
    return response.status(200).json({ success: true, data: newScore });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to add new highscore' });
  }
};
