import Paper from '@mui/material/Paper';
import { Todolist } from './Todolist/TodoList';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { selectTodos } from './todolistsSelectors';
export const Todolists = () => {
   const todos = useAppSelector(selectTodos);
   return (
      <>
         {todos.map((el) => {
            return (
               <Paper
                  elevation={3}
                  key={el.id}
                  sx={{ padding: '20px', height: 'max-content' }}>
                  <Todolist todolist={el} />
               </Paper>
            );
         })}
      </>
   );
};
