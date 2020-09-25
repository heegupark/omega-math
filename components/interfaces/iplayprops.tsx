import IMainProps from './imainprops';

export default interface IPlayProps extends IMainProps {
  mode: string;
  setIsNewHighscore: (isNewHighscore: boolean) => void;
  setNewscore: (newScore: number) => void;
}
