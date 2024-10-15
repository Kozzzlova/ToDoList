import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { filterButtonsContainerSx } from './FilterTasksButtons.styles';
import {
   ChangeTodolistFilter,
   FilterType,
   todolistsType,
} from '../../../../model/todos-reducer';
import { useAppDispatch } from '../../../../../../common/hooks/useAppDispatch';


type Props = {
   todolist: todolistsType;
};

export const FilterTasksButtons = ({ todolist }: Props) => {
   const { filter, id } = todolist;
   const dispatch = useAppDispatch();
   const changeFilter = (filter: FilterType, id: string) => {
      dispatch(ChangeTodolistFilter({ filter, id }));
   };
   return (
      <Box sx={filterButtonsContainerSx}>
         <Button
            sx={{ flex: 'auto' }}
            color='primary'
            variant={filter === 'All' ? 'contained' : 'outlined'}
            onClick={() => {
               changeFilter('All', id);
            }}
            title='All'>
            All{' '}
         </Button>
         <Button
            sx={{ flex: 'auto' }}
            color='secondary'
            variant={filter === 'Active' ? 'contained' : 'outlined'}
            onClick={() => {
               changeFilter('Active', id);
            }}
            title='Active'>
            {' '}
            Active
         </Button>
         <Button
            sx={{ flex: 'auto' }}
            color='success'
            variant={filter === 'Completed' ? 'contained' : 'outlined'}
            onClick={() => {
               changeFilter('Completed', id);
            }}
            title='Completed'>
            {' '}
            Completed
         </Button>
      </Box>
   );
};
