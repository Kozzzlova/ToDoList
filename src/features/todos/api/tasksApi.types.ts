import { TaskPriority, TaskStatus } from '../../../common/enums/enums';

export type GetTaskResponse = {
   error: null | string;
   items: DomainTask[];
   totalCount: number;
};

export type DomainTask = {
   description: string;
   title: string;
   status: TaskStatus;
   priority: TaskPriority;
   startDate: string;
   deadline: string;
   id: string;
   todoListId: string;
   order: number;
   addedDate: string;
};

export type UpdateTaskModel = {
   description: string;
   title: string;
   status: TaskStatus;
   priority: TaskPriority;
   startDate: string;
   deadline: string;
};
