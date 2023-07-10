import { useRef, useContext } from 'react';

import { AppContext } from '../context/Context';

const StartForm: React.FC = () => {
  const lettersRef = useRef<HTMLInputElement>(null);
  const attemptsRef = useRef<HTMLInputElement>(null);
  const { setIsGameStarted, setAttempts, setLetters } = useContext(AppContext);

  const startGame = () => {
    if (lettersRef.current !== null && attemptsRef.current !== null) {
      const letters = +lettersRef.current.value;
      const attempts = +attemptsRef.current.value;
      setLetters(letters);
      setAttempts(attempts);
      setIsGameStarted(true);
    }
  };
  return (
    <form onSubmit={startGame}>
      <label htmlFor='letters'>Letters in word (min 5)</label>
      <input
        ref={lettersRef}
        type='number'
        id='letters'
        min={5}
        defaultValue={5}
      />
      <label htmlFor='attempts'>Attempts (min 5)</label>
      <input
        ref={attemptsRef}
        type='number'
        id='attempts'
        min={5}
        defaultValue={5}
      />
      <button type='submit'>Start</button>
    </form>
  );
};

export default StartForm;
