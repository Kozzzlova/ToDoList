import Checkbox from '@mui/material/Checkbox';
import React, { ChangeEvent, useEffect, useState } from 'react';
import AddItemForm from '../common/components/AddItemForm';
import EditableSpan from '../common/components/EditableSpan';
import { Todolist } from '../features/todos/api/todolistsApi.types';
import { Response } from '../common/types/types';
import { DomainTask } from '../features/todos/api/tasksApi.types';
import { todolistApi } from '../features/todos/api/todolistsApi';
import { tasksApi } from '../features/todos/api/tasksApi';

export const AppHttpRequests = () => {
   const [todolists, setTodolists] = useState<Todolist[]>([]);
   const [tasks, setTasks] = useState<{ [key: string]: DomainTask[] }>({});

   useEffect(() => {
      todolistApi.getTodolist().then((res) => {
         const todolists = res.data;
         setTodolists(todolists);
         todolists.forEach((tl) => {
            tasksApi.getTasks(tl.id).then((res) => {
               setTasks((tasks) => ({
                  ...tasks,
                  [tl.id]: res.data.items,
               }));
            });
         });
      });
   }, []);

   const createTodolistHandler = (title: string) => {
      todolistApi.createTodolist(title).then((res) => {
         const newTodolist = res.data.data.item;
         setTodolists([newTodolist, ...todolists]);
      });
   };
   const removeTodolistHandler = (id: string) => {
      todolistApi.removeTodolist(id).then(() => {
         setTodolists(todolists.filter((tl) => tl.id !== id));
         const copyTasks = { ...tasks };
         delete copyTasks[id];
         setTasks(copyTasks);
      });
   };

   const updateTodolistHandler = (id: string, title: string) => {
      todolistApi.updateTodolist({ id, title }).then(() => {
         setTodolists(
            todolists.map((tl) => (tl.id === id ? { ...tl, title } : tl))
         );
      });
   };

   const createTaskHandler = (title: string, todolistId: string) => {
      tasksApi.createTask({ title, todolistId }).then((res) => {
         const newTask = res.data.data.item;
         setTasks({
            ...tasks,
            [todolistId]: [newTask, ...(tasks[todolistId] || [])],
         });
      });
   };

   const removeTaskHandler = (taskId: string, todolistId: string) => {
      tasksApi.removeTask({ taskId, todolistId }).then(() => {
         setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].filter((t) => t.id !== taskId),
         });
      });
   };

   const changeTaskStatusHandler = (
      e: ChangeEvent<HTMLInputElement>,
      task: DomainTask,
      todolistId: string
   ) => {
      tasksApi.changeTaskStatus({ e, task, todolistId }).then((res) => {
         const newTask = res.data.data.item;
         setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((t) =>
               t.id === task.id ? newTask : t
            ),
         });
      });
   };

   const changeTaskTitleHandler = (
      title: string,
      task: DomainTask,
      todolistId: string
   ) => {
      tasksApi.chatngeTaskTitle({ title, task, todolistId }).then((res) => {
         const newTask = res.data.data.item;
         setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map((t) =>
               t.id === task.id ? newTask : t
            ),
         });
      });
   };

   return (
      <div style={{ margin: '20px' }}>
         <AddItemForm addItem={createTodolistHandler} />

         {/* Todolists */}
         {todolists.map((tl) => {
            return (
               <div
                  key={tl.id}
                  style={todolist}>
                  <div>
                     <EditableSpan
                        value={tl.title}
                        onChangeSpan={(title: string) =>
                           updateTodolistHandler(tl.id, title)
                        }
                     />
                     <button onClick={() => removeTodolistHandler(tl.id)}>
                        x
                     </button>
                  </div>
                  <AddItemForm
                     addItem={(title) => createTaskHandler(title, tl.id)}
                  />

                  {/* Tasks */}
                  {!!tasks[tl.id] &&
                     tasks[tl.id].map((task: DomainTask) => {
                        return (
                           <div key={task.id}>
                              <Checkbox
                                 checked={task.status === 2}
                                 onChange={(e) =>
                                    changeTaskStatusHandler(e, task, tl.id)
                                 }
                              />
                              <EditableSpan
                                 value={task.title}
                                 onChangeSpan={(title) =>
                                    changeTaskTitleHandler(title, task, tl.id)
                                 }
                              />
                              <button
                                 onClick={() =>
                                    removeTaskHandler(task.id, tl.id)
                                 }>
                                 x
                              </button>
                           </div>
                        );
                     })}
               </div>
            );
         })}
      </div>
   );
};

// Styles
const todolist: React.CSSProperties = {
   border: '1px solid black',
   margin: '20px 0',
   padding: '10px',
   width: '300px',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'column',
};
