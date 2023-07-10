import { useContext, useState } from 'react';
import { AppContext } from '../context/Context';
import Row from './Row';

const Board: React.FC = () => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<number>(0);

  const { attempts, setIsGameStarted, setWins, setLosses } =
    useContext(AppContext);
  const GOAL = useContext(AppContext).wordOfTheDay.split('');

  const handleInputChange = (letter: string, index: number) => {
    setInputValues((prevInputValues: string[]) => {
      const updatedValues = [...prevInputValues];
      updatedValues[index] = letter;
      return updatedValues;
    });
  };

  const renderRows = (attempts: number) => {
    const rows = [];
    for (let i = 0; i < attempts; i++) {
      rows.push(
        <Row
          rowSubmitted={i < currentAttempt}
          setLetter={handleInputChange}
          key={i}
          active={i === currentAttempt ? true : false}
        />
      );
    }
    return rows;
  };

  const sendAttempt = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentAttempt((state) => state + 1);
    if (inputValues.join('').toLowerCase() === GOAL.join('').toLowerCase()) {
      alert('YOU WON!!!');
      setWins();
      setIsGameStarted(false);
    } else if (currentAttempt === attempts - 1) {
      alert(`GAME OVER!!!, the word was: ${GOAL.join('')}`);
      setLosses();
      setIsGameStarted(false);
    }
  };

  return (
    <form onSubmit={sendAttempt}>
      {renderRows(attempts)}
      <button type='submit'>Try</button>
    </form>
  );
};

export default Board;
