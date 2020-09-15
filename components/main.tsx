import React, { useState } from 'react';
import Start from './start';
import Play from './play';

export default function Main() {
  const [view, setView] = useState('start' as any);
  return (
    <>
      {view === 'start' ? (
        <Start setView={setView} />
      ) : (
        <Play setView={setView} />
      )}
    </>
  );
}
