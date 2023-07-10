import { useContext } from 'react';
import { AppContext } from '../context/Context';
import Cell from './Cell';

interface RowProps {
  active: boolean;
  setLetter: (letter: string, index: number) => void;
  rowSubmitted: boolean;
}

const Row: React.FC<RowProps> = ({ active, setLetter, rowSubmitted }) => {
  const { letters } = useContext(AppContext);

  const renderCells = (letters: number) => {
    const cells = [];
    for (let i = 0; i < letters; i++) {
      cells.push(
        <Cell
          rowSubmitted={rowSubmitted}
          setLetter={setLetter}
          key={i}
          active={active}
          position={i}
        />
      );
    }
    return cells;
  };

  return <div>{renderCells(letters)}</div>;
};

export default Row;
