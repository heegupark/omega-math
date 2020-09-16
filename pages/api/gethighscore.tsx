import { NextApiRequest, NextApiResponse } from 'next';
import Scoreboard from '../../middleware/models/scoreboard';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { mode } = request.body;
  try {
    const scoreboard = await Scoreboard.findOne({ mode }).sort({ score: -1 });
    if (!scoreboard) {
      return response
        .status(404)
        .json({ success: false, message: 'no scoreboard data' });
    }
    return response.status(200).json({ success: true, data: scoreboard });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get scoreboard data' });
  }
};
