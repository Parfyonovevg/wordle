import { useState, useContext } from 'react';
import { AppContext } from '../context/Context';

interface CellProps {
  active: boolean;
  position: number;
  setLetter: (letter: string, index: number) => void;
  rowSubmitted: boolean;
}

const Cell: React.FC<CellProps> = ({
  active,
  position,
  setLetter,
  rowSubmitted,
}) => {
  const [style, setStyle] = useState('');
  const GOAL = useContext(AppContext).wordOfTheDay.split('');
  const inputLetterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLetter(e.target.value, position);
    if (e.target.value === GOAL[position]) {
      setStyle('correct');
    } else if (GOAL.includes(e.target.value)) {
      setStyle('include');
    } else {
      setStyle('incorrect');
    }
  };

  return (
    <input
      className={rowSubmitted ? style : ''}
      maxLength={1}
      disabled={!active}
      onChange={inputLetterHandler}
      required
    />
  );
};

export default Cell;
