import styles from './todos.module.scss';

/* eslint-disable-next-line */
export interface TodosProps {}

export function Todos(props: TodosProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Todos!</h1>
    </div>
  );
}

export default Todos;
