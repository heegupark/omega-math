import React, { useState } from 'react';
import Home from './home';
import Play from './play';
import Highscore from './highscore';

export default function Main() {
  const [view, setView] = useState<string>('home');
  const [mode, setMode] = useState<string>('add');
  const [newScore, setNewscore] = useState<number>(0);
  const [isNewHighscore, setIsNewHighscore] = useState(false);

  let element = null;
  switch (view) {
    case 'play':
      element = (
        <Play
          mode={mode}
          setIsNewHighscore={setIsNewHighscore}
          setView={setView}
          setMode={setMode}
          setNewscore={setNewscore}
        />
      );
      break;
    case 'highscore':
      element = (
        <Highscore
          mode={mode}
          setMode={setMode}
          isNewHighscore={isNewHighscore}
          setIsNewHighscore={setIsNewHighscore}
          setView={setView}
          newScore={newScore}
        />
      );
      break;
    default:
      element = <Home setView={setView} setMode={setMode} />;
  }
  return <>{element}</>;
}
