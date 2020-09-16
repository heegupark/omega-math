import { NextApiRequest, NextApiResponse } from 'next';
import Scoreboard from '../../middleware/models/scoreboard';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const scoreboard = await Scoreboard.find();
    if (!scoreboard) {
      return response
        .status(404)
        .json({ success: false, message: 'no scoreboard data' });
    }
    return response.status(201).json({ success: true, data: scoreboard });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to get scoreboard data' });
  }
};
