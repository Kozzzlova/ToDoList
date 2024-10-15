import { v1 } from 'uuid';

export type TasksType = {
   id: string;
   title: string;
   isDone: boolean;
};
export type FilterType = 'All' | 'Active' | 'Completed';
export type todolistsType = {
   id: string;
   filter: FilterType;
   title: string;
   tasks: TasksType[];
};

const initialState: todolistsType[] = [];

type ActionType =
   | RemoveTodolistActionType
   | AddTodolistActionType
   | ChangeTodolistTitleActionType
   | ChangeTodolistFilterActionType
   | AddTaskType
   | RemoveTaskType
   | ChangeTaskStatusType
   | ChangeTaskTitleType;

export type RemoveTodolistActionType = {
   type: 'REMOVE-TODOLIST';
   payload: {
      id: string;
   };
};
export type AddTodolistActionType = {
   type: 'ADD-TODOLIST';
   payload: {
      title: string;
   };
};
export type ChangeTodolistTitleActionType = {
   type: 'CHANGE-TODOLIST-TITLE';
   payload: {
      todolistId: string;
      title: string;
   };
};
export type ChangeTodolistFilterActionType = {
   type: 'CHANGE-TODOLIST-FILTER';
   payload: {
      id: string;
      filter: FilterType;
   };
};
export type AddTaskType = {
   type: 'ADD-TASK';
   payload: {
      todolistId: string;
      taskNewTitle: string;
   };
};

export type RemoveTaskType = {
   type: 'REMOVE-TASK';
   payload: {
      todolistId: string;
      taskId: string;
   };
};

export type ChangeTaskStatusType = {
   type: 'CHANGE-TASK-STATUS';
   payload: {
      todolistId: string;
      taskId: string;
      taskStatus: boolean;
   };
};
export type ChangeTaskTitleType = {
   type: 'CHANGE-TASK-TITLE';
   payload: {
      todolistId: string;
      taskId: string;
      newTitle: string;
   };
};

export const todosReducer = (
   state: todolistsType[] = initialState,
   action: ActionType
): todolistsType[] => {
   switch (action.type) {
      case 'REMOVE-TODOLIST': {
         return state.filter((el) => el.id !== action.payload.id);
      }
      case 'ADD-TODOLIST': {
         const newTodolist: todolistsType = {
            id: v1(),
            title: action.payload.title,
            filter: 'All',
            tasks: [],
         };
         return [...state, newTodolist];
      }
      case 'CHANGE-TODOLIST-TITLE': {
         return state.map((el) =>
            el.id === action.payload.todolistId
               ? { ...el, title: action.payload.title }
               : el
         );
      }
      case 'CHANGE-TODOLIST-FILTER': {
         return state.map((el) =>
            el.id === action.payload.id
               ? { ...el, filter: action.payload.filter }
               : el
         );
      }
      case 'ADD-TASK': {
         const newTask = {
            id: v1(),
            title: action.payload.taskNewTitle,
            isDone: false,
         };
         return state.map((tl) =>
            tl.id === action.payload.todolistId
               ? { ...tl, tasks: [...tl.tasks, newTask] }
               : tl
         );
      }
      case 'REMOVE-TASK': {
         return state.map((tl) =>
            tl.id === action.payload.todolistId
               ? {
                    ...tl,
                    tasks: tl.tasks.filter(
                       (t) => t.id !== action.payload.taskId
                    ),
                 }
               : tl
         );
      }
      case 'CHANGE-TASK-STATUS': {
         return state.map((tl) =>
            tl.id === action.payload.todolistId
               ? {
                    ...tl,
                    tasks: tl.tasks.map((t) =>
                       t.id === action.payload.taskId
                          ? { ...t, isDone: action.payload.taskStatus }
                          : t
                    ),
                 }
               : tl
         );
      }
      case 'CHANGE-TASK-TITLE': {
         return state.map((tl) =>
            tl.id === action.payload.todolistId
               ? {
                    ...tl,
                    tasks: tl.tasks.map((t) =>
                       t.id === action.payload.taskId
                          ? { ...t, title: action.payload.newTitle }
                          : t
                    ),
                 }
               : tl
         );
      }

      default: {
         return state;
      }
   }
};

export const removeTodolistAC = (
   todolistId: string
): RemoveTodolistActionType => {
   return { type: 'REMOVE-TODOLIST', payload: { id: todolistId } } as const;
};

export const AddTodolistAC = (title: string): AddTodolistActionType => {
   return {
      type: 'ADD-TODOLIST',
      payload: {
         title,
      },
   } as const;
};

export const ChangeTodolistTitleAC = (payload: {
   todolistId: string;
   title: string;
}): ChangeTodolistTitleActionType => {
   return {
      type: 'CHANGE-TODOLIST-TITLE',
      payload,
   } as const;
};

export const ChangeTodolistFilter = (payload: {
   id: string;
   filter: FilterType;
}): ChangeTodolistFilterActionType => {
   return {
      type: 'CHANGE-TODOLIST-FILTER',
      payload,
   } as const;
};

export const AddTaskAC = (payload: {
   todolistId: string;
   taskNewTitle: string;
}): AddTaskType => {
   return {
      type: 'ADD-TASK',
      payload,
   } as const;
};

export const RemoveTaskAC = (payload: {
   todolistId: string;
   taskId: string;
}): RemoveTaskType => {
   return {
      type: 'REMOVE-TASK',
      payload,
   } as const;
};

export const ChangeTaskStatusAC = (payload: {
   todolistId: string;
   taskId: string;
   taskStatus: boolean;
}): ChangeTaskStatusType => {
   return {
      type: 'CHANGE-TASK-STATUS',
      payload,
   } as const;
};
export const ChangeTaskTitleAC = (payload: {
   todolistId: string;
   taskId: string;
   newTitle: string;
}): ChangeTaskTitleType => {
   return {
      type: 'CHANGE-TASK-TITLE',
      payload,
   } as const;
};
