import IScoreBoard from './iscoreboard';

export default interface IHighScores {
  success: boolean;
  data: [IScoreBoard];
}
