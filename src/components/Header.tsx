import { useContext } from 'react';
import { AppContext } from '../context/Context';

import './Header.css';

const Header: React.FC = () => {
  const { wins, losses } = useContext(AppContext);

  return (
    <header className='header'>
      <div className='logo'>
        <h1>Wordle</h1>
      </div>
      <div className='score'>
        <h2>
          Your score: <span className='wins'>wins: {wins} /</span>
          <span className='losses'> losses: {losses}</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
