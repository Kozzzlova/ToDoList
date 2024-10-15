import {
   ChangeTodolistTitleAC,
   removeTodolistAC,
   todolistsType,
} from '../../../../model/todos-reducer';
import EditableSpan from '../../../../../../common/components/EditableSpan';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../../../../common/hooks/useAppDispatch';
type Props = {
   todolist: todolistsType;
};

export const TodolistTitle = ({ todolist }: Props) => {
   const { id, title } = todolist;
   const dispatch = useAppDispatch();
   const removeTodolistHandler = () => {
      dispatch(removeTodolistAC(id));
   };

   const changeTodolistTitleHandler = (newSpan: string) => {
      dispatch(ChangeTodolistTitleAC({ todolistId: id, title: newSpan }));
   };
   return (
      <h3>
         <EditableSpan
            onChangeSpan={changeTodolistTitleHandler}
            value={title}
         />
         <IconButton onClick={removeTodolistHandler}>
            <DeleteIcon />
         </IconButton>
      </h3>
   );
};
