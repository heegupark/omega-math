import mongoose, { Schema, Document } from 'mongoose';

export interface IScoreboard extends Document {
  score: string;
}

const scoreboardSchema: Schema = new mongoose.Schema(
  {
    score: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Scoreboard =
  mongoose.models.Scoreboard ||
  mongoose.model<IScoreboard>('Scoreboard', scoreboardSchema);
export default Scoreboard;
