import List from '@mui/material/List';
import { todolistsType } from '../../../../model/todos-reducer';
import { Task } from './Task/Task';

type Props = {
   todolist: todolistsType;
};
export const Tasks = ({ todolist }: Props) => {
   const { tasks, filter, id } = todolist;
   let tasksForTodoList = tasks;

   if (filter === 'Active') {
      tasksForTodoList = tasks.filter((el) => !el.isDone);
   }
   if (filter === 'Completed') {
      tasksForTodoList = tasks.filter((el) => el.isDone);
   }
   return (
      <>
         {tasksForTodoList.length === 0 ? (
            <p>Тасок нет</p>
         ) : (
            <List>
               {tasksForTodoList.map((task) => {
                  return (
                     <Task
                        key={task.id}
                        task={task}
                        todolist={todolist}
                     />
                  );
               })}
            </List>
         )}
      </>
   );
};
