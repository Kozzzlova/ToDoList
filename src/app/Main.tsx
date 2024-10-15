import AddItemForm from '../common/components/AddItemForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { AddTodolistAC } from '../features/todos/model/todos-reducer';
import { Todolists } from '../features/todos/UI/Todolists/Todolists';
import { useAppDispatch } from '../common/hooks/useAppDispatch';

export const Main = () => {
   const dispatch = useAppDispatch();
   const addTodolist = (title: string) => {
      dispatch(AddTodolistAC(title));
   };
   return (
      <Container>
         <Grid
            container
            sx={{ paddingTop: '90px', mb: '30px' }}>
            <AddItemForm addItem={addTodolist} />
         </Grid>
         <Grid
            container
            spacing={4}>
            <Todolists />
         </Grid>
      </Container>
   );
};
