// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Todos } from '@react-app/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from '../redux/test/action';
import styles from './app.module.scss';

export function App() {
  const dispatch = useDispatch();

  const data = useSelector((state:any) => state.test.data)

  useEffect(() => {
    dispatch(testActions());
  }, []);

  return (
    <div className=" bg-red-400">
      {
        data.map((e:any, i:number) => (
          <>
          {e.title}
          <Todos key={i} />
          </>

        ))
      }

      <div> react - 2</div>
    </div>
  );
}

export default App;
