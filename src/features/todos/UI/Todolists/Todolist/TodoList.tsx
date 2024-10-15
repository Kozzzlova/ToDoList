import { AddTaskAC, todolistsType } from '../../../model/todos-reducer';
import AddItemForm from '../../../../../common/components/AddItemForm';
import { TodolistTitle } from './TodolistTitle/TodolistTitle';
import { FilterTasksButtons } from './FilterTasksButtons/FilterTasksButtons';
import { Tasks } from './Tasks/Tasks';
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch';

type TodoListPropsType = {
   todolist: todolistsType;
};

export const Todolist = ({ todolist }: TodoListPropsType) => {
   const dispatch = useAppDispatch();
   const { id } = todolist;
   const addTask = (taskNewTitle: string) => {
      dispatch(AddTaskAC({ taskNewTitle, todolistId: id }));
   };

   return (
      <div>
         <TodolistTitle todolist={todolist} />
         <FilterTasksButtons todolist={todolist} />
         <Tasks todolist={todolist} />
         <AddItemForm addItem={addTask} />
      </div>
   );
};
