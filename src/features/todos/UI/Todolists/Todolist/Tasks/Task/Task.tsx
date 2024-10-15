import { ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import {
   TasksType,
   ChangeTaskStatusAC,
   ChangeTaskTitleAC,
   RemoveTaskAC,
   todolistsType,
} from '../../../../../model/todos-reducer';

import EditableSpan from '../../../../../../../common/components/EditableSpan';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import { getListItemSx } from './Task.styles';
import { useAppDispatch } from '../../../../../../../common/hooks/useAppDispatch';
type Props = {
   todolist: todolistsType;
   task: TasksType;
};

export const Task = ({ task, todolist }: Props) => {
   const dispatch = useAppDispatch();

   const removeTaskHandler = () => {
      dispatch(RemoveTaskAC({ taskId: task.id, todolistId: todolist.id }));
   };

   const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const isDone = e.currentTarget.checked;
      dispatch(
         ChangeTaskStatusAC({
            taskId: task.id,
            taskStatus: isDone,
            todolistId: todolist.id,
         })
      );
   };

   const changeTaskTitleHandler = (title: string) => {
      dispatch(
         ChangeTaskTitleAC({
            taskId: task.id,
            newTitle: title,
            todolistId: todolist.id,
         })
      );
   };

   return (
      <ListItem
         key={task.id}
         sx={getListItemSx(task.isDone)}>
         <div>
            <Checkbox
               checked={task.isDone}
               onChange={changeTaskStatusHandler}
            />
            <EditableSpan
               value={task.title}
               onChangeSpan={changeTaskTitleHandler}
            />
         </div>
         <IconButton onClick={removeTaskHandler}>
            <DeleteIcon />
         </IconButton>
      </ListItem>
   );
};
