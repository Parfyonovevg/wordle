import { useContext } from 'react';

import './App.css';
import Header from './components/Header';
import StartForm from './components/StartForm';
import { AppContext } from './context/Context';
import Board from './components/Board';

function App() {
  const { isGameStarted } = useContext(AppContext);
  return (
    <div className='App'>
      <Header />
      {isGameStarted ? <Board /> : <StartForm />}
    </div>
  );
}

export default App;
