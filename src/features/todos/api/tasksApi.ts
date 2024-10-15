import axios from 'axios';
import { DomainTask, GetTaskResponse } from './tasksApi.types';
import { Response } from '../../../common/types/types';
import { UpdateTaskModel } from './tasksApi.types';
import { ChangeEvent } from 'react';
import { instance } from '../../../common/instance/instance';
import { TaskStatus } from '../../../common/enums/enums';
import { Task } from '@mui/icons-material';

export const tasksApi = {
   getTasks(todolistId: string) {
      return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`);
   },
   createTask(payload: { todolistId: string; title: string }) {
      const { todolistId, title } = payload;
      return instance.post<Response<{ item: DomainTask }>>(
         `todo-lists/${todolistId}/tasks`,
         { title }
      );
   },
   removeTask(payload: { todolistId: string; taskId: string }) {
      const { todolistId, taskId } = payload;
      return instance.delete<Response>(
         `todo-lists/${todolistId}/tasks/${taskId}`
      );
   },
   changeTaskStatus(payload: {
      e: ChangeEvent<HTMLInputElement>;
      task: DomainTask;
      todolistId: string;
   }) {
      const { e, task, todolistId } = payload;
      const model: UpdateTaskModel = {
         description: task.description,
         title: task.title,
         status: e.currentTarget.checked
            ? TaskStatus.Completed
            : TaskStatus.New,
         priority: task.priority,
         startDate: task.startDate,
         deadline: task.deadline,
      };
      return instance.put<Response<{ item: DomainTask }>>(
         `todo-lists/${todolistId}/tasks/${task.id}`,
         model
      );
   },
   chatngeTaskTitle(payload: {
      task: DomainTask;
      todolistId: string;
      title: string;
   }) {
      const { task, todolistId, title } = payload;
      const model: UpdateTaskModel = {
         description: task.description,
         title: title,
         status: task.status,
         priority: task.priority,
         startDate: task.startDate,
         deadline: task.deadline,
      };
      return instance.put<Response<{ item: DomainTask }>>(
         `todo-lists/${todolistId}/tasks/${task.id}`,
         model
      );
   },
};
