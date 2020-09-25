export default interface IScoreBoard {
  _id: string;
  score: number;
  mode: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
