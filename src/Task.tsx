import { TasksProps } from './TodoList';

export const Task = ({ isDone, title, id }: TasksProps) => {
   return (
      <li key={id}>
         <input
            type='checkbox'
            checked={isDone}
         />{' '}
         <span>{title}</span>
      </li>
   );
};
