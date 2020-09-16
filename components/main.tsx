import React, { useState } from 'react';
import Home from './home';
import Play from './play';
import Highscore from './highscore';

export default function Main() {
  const [view, setView] = useState('home' as any);
  const [mode, setMode] = useState('add' as any);
  const [newScore, setNewscore] = useState(0 as any);
  const [isNewHighscore, setIsNewHighscore] = useState(false);

  let element = null;
  switch (view) {
    case 'play':
      element = (
        <Play
          setIsNewHighscore={setIsNewHighscore}
          setView={setView}
          setNewscore={setNewscore}
        />
      );
      break;
    case 'highscore':
      element = (
        <Highscore
          mode={mode}
          isNewHighscore={isNewHighscore}
          setIsNewHighscore={setIsNewHighscore}
          setView={setView}
          newScore={newScore}
        />
      );
      break;
    default:
      element = <Home setView={setView} />;
  }
  return <>{element}</>;
}
