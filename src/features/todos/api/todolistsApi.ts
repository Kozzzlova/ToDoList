import { Todolist } from './todolistsApi.types';
import { Response } from '../../../common/types/types';
import { instance } from '../../../common/instance/instance';

export const todolistApi = {
   getTodolist() {
      return instance.get<Todolist[]>('todo-lists');
   },

   createTodolist(title: string) {
      return instance.post<
         Response<{
            item: Todolist;
         }>
      >('todo-lists', { title });
   },
   updateTodolist(payload: { id: string; title: string }) {
      const { id, title } = payload;
      return instance.put<Response>(`todo-lists/${id}`, { title });
   },
   removeTodolist(id: string) {
      return instance.delete<Response>(`todo-lists/${id}`);
   },
};
