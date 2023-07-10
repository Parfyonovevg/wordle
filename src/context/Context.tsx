import { createContext, useState } from 'react';
const wordList: string[] = [
  'apple',
  'banana',
  'cat',
  'dog',
  'elephant',
  'fruit',
  'grape',
  'house',
  'igloo',
  'juice',
  'lemon',
  'mango',
  'north',
  'olive',
  'peace',
  'quick',
  'round',
  'snake',
  'tiger',
  'umbra',
  'vivid',
  'water',
  'xerox',
  'yield',
  'zebra',
  'about',
  'black',
  'cloud',
  'daisy',
  'eagle',
  'flame',
  'glass',
  'happy',
  'image',
  'jumbo',
  'kiosk',
  'lemon',
  'mango',
  'naval',
  'oasis',
  'peace',
  'quick',
  'radar',
  'saint',
  'table',
  'unity',
  'vital',
  'watch',
  'xenon',
  'young',
  'zebra',
  'alarm',
  'bliss',
  'coast',
  'dream',
  'eagle',
  'faith',
  'grace',
  'hobby',
  'ideal',
  'jolly',
  'koala',
  'lemon',
  'merry',
  'naval',
  'ocean',
  'peace',
  'quick',
  'round',
  'snake',
  'tally',
  'urban',
  'vivid',
  'waltz',
  'xenon',
  'youth',
  'zebra',
  'agile',
  'bliss',
  'craft',
  'daisy',
  'eager',
  'flame',
  'giant',
  'happy',
  'ideal',
  'jolly',
  'karma',
  'lemon',
  'merry',
  'naval',
  'olive',
  'peace',
  'quick',
  'round',
  'snake',
  'table',
  'unity',
  'vital',
  'watch',
  'xylopho',
  'ambush',
  'butter',
  'carpet',
  'dentist',
  'element',
  'family',
  'garage',
  'honest',
  'island',
  'jacket',
  'kettle',
  'leap',
  'magnet',
  'napkin',
  'oxygen',
  'pencil',
  'quest',
  'rabbit',
  'sandal',
  'tulip',
  'umbrella',
  'vacuum',
  'wallet',
  'x-ray',
  'yacht',
  'zealous',
  'alien',
  'blanket',
  'candle',
  'dancer',
  'eleven',
  'factory',
  'guitar',
  'humble',
  'ivory',
  'jigsaw',
  'kangaroo',
  'laptop',
  'monster',
  'novel',
  'octopus',
  'parrot',
  'quilt',
  'rocket',
  'sunset',
  'tango',
  'unicorn',
  'violet',
  'waffle',
  'xylophone',
  'yogurt',
  'zeppelin',
];

interface AppContextType {
  wordOfTheDay: string;
  attempts: number;
  letters: number;
  wins: number;
  losses: number;
  isGameStarted: boolean;
  setWins: () => void;
  setLosses: () => void;
  setAttempts: (attempts: number) => void;
  setLetters: (letters: number) => void;
  setIsGameStarted: (isGameStarted: boolean) => void;
}

const initialContext: AppContextType = {
  wordOfTheDay: '',
  attempts: 6,
  letters: 5,
  wins: 0,
  losses: 0,
  isGameStarted: false,
  setAttempts: () => {},
  setLetters: () => {},
  setWins: () => {},
  setLosses: () => {},
  setIsGameStarted: () => {},
};

export const AppContext = createContext(initialContext);

interface ContextProviderProps {
  children: JSX.Element[] | JSX.Element;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [attempts, setAttempts] = useState(initialContext.attempts);
  const [letters, setLetters] = useState(initialContext.letters);
  const [wins, setWins] = useState(initialContext.wins);
  const [losses, setLosses] = useState(initialContext.losses);

  const [isGameStarted, setIsGameStarted] = useState(
    initialContext.isGameStarted
  );
  // const [wordOfTheDay, setWordOfTheDay] = useState('');

  const arrayOfWords = wordList.filter((word) => word.length === letters);

  const getRandomNum = () => {
    return Math.floor(Math.random() * (arrayOfWords.length - 0 + 1)) + 0;
  };

  const index = getRandomNum();
  const word = arrayOfWords[index];

  const increaseWins = () => {
    setWins((prevWins) => prevWins + 1);
  };
  const increaseLosses = () => {
    setLosses((prevLosses) => prevLosses + 1);
  };

  return (
    <AppContext.Provider
      value={{
        wordOfTheDay: word,
        attempts,
        letters,
        wins,
        losses,
        isGameStarted,
        setIsGameStarted,
        setAttempts,
        setLetters,
        setWins: increaseWins,
        setLosses: increaseLosses,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
