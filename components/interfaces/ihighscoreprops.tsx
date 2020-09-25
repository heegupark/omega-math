import IMainProps from './imainprops';

export default interface IHighscoreProps extends IMainProps {
  mode: string;
  isNewHighscore: boolean;
  newScore: number;
  setIsNewHighscore: (isNewHighscore: boolean) => void;
}
