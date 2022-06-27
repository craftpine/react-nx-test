// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { Todos } from '@react-app/ui';

export function App() {
  return (
    <>
      <Todos />
    </>
  );
}

export default App;
