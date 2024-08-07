import { Button } from './Button';
// import React from 'react';

// type TodoListProps = {
//    title: string;
//    tasks: TaskProps[];
// };

// export type TaskProps = {
//    id: number;
//    title: string;
//    isDone: boolean;
// };

// export const TodoList = (props: TodoListProps) => {
//    const { title, tasks } = props;
//    const mappedTasks = tasks.length ? (
//       tasks.map((task) => {
//          return (
//             <Task
//                key={task.id}
//                {...task}
//             />
//          );
//       })
//    ) : (
//       <div>No Data</div>
//    );
//    return (
//       <div>
//          <h3>{title}</h3>
//          <div>
//             <input />
//             <button>+</button>
//          </div>
//          <ul>{mappedTasks}</ul>
//          <div>
//             <Button title='All' />
//             <Button title='Active' />
//             <Button title='Completed' />
//          </div>
//       </div>
//    );
// };

import React, { ChangeEvent, useRef, useState, KeyboardEvent } from 'react';
import { Task } from './Task';
import { FilterType } from './App';
import s from './TodoList.module.css';

export type TasksProps = {
   id: string;
   title: string;
   isDone: boolean;
};

type TodoListPropsType = {
   title: string;
   tasks: TasksProps[];
   removeTask: (taskId: string) => void;
   changeFilter: (filter: FilterType) => void;
   addTask: (title: string) => void;
   changeTaskStatus: (taskId: string, taskStatus: boolean) => void;
   filter: string;
};

export const Todolist = ({
   title,
   tasks,
   removeTask,
   changeFilter,
   addTask,
   changeTaskStatus,
   filter,
}: TodoListPropsType) => {
   const [error, setError] = useState<null | string>(null);
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTaskTitle(e.currentTarget.value);
      setError(null);
   };
   const addTaskHandler = () => {
      if (taskTitle.trim() !== '') {
         addTask(taskTitle.trim());
      } else {
         setError('Title is required');
      }
      setTaskTitle('');
   };
   const addTaskOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.altKey && e.key === 'Enter') {
         addTaskHandler();
      }
   };
   const setAllTaskHandler = () => {
      changeFilter('All');
   };
   const setActiveTaskHandler = () => {
      changeFilter('Active');
   };
   const setACompletedTaskHandler = () => {
      changeFilter('Completed');
   };

   const mappedTasks = tasks.length ? (
      tasks.map((task) => {
         const removeTaskHandler = () => {
            removeTask(task.id);
         };
         const onChangeTaskStatusHandler = (
            e: ChangeEvent<HTMLInputElement>
         ) => {
            const newStatusValue = e.currentTarget.checked;
            changeTaskStatus(task.id, newStatusValue);
         };

         return (
            <li
               className={task.isDone ? s.isDone : ''}
               key={task.id}>
               <Button
                  title='X'
                  onClick={removeTaskHandler}></Button>
               <input
                  type='checkbox'
                  checked={task.isDone}
                  onChange={onChangeTaskStatusHandler}
               />{' '}
               <span>{task.title}</span>
            </li>
         );
      })
   ) : (
      <div> No Data</div>
   );

   const [taskTitle, setTaskTitle] = useState('');

   return (
      <div>
         <h3>{title}</h3>
         <div>
            <input
               className={error ? s.error : ''}
               value={taskTitle}
               onChange={onChangeHandler}
               onKeyUp={addTaskOnKeyUpHandler}
            />
            <Button
               onClick={addTaskHandler}
               title='+'></Button>
            <div className={s.errorMessage}>{error}</div>
         </div>
         <ul>{mappedTasks}</ul>
         <div>
            <Button
               className={filter === 'All' ? s.activeFilter : ''}
               onClick={setAllTaskHandler}
               title='All'
            />
            <Button
               className={filter === 'Active' ? s.activeFilter : ''}
               onClick={setActiveTaskHandler}
               title='Active'
            />
            <Button
               className={filter === 'Completed' ? s.activeFilter : ''}
               onClick={setACompletedTaskHandler}
               title='Completed'
            />
         </div>
      </div>
   );
};

// export const Todolist = ({
//    title,
//    tasks,
//    removeTask,
//    changeFilter,
//    addTask,
// }: TodoListPropsType) => {
//    const mappedTasks = tasks.length ? (
//       tasks.map((task) => {
//          return (
//             <li key={task.id}>
//                <Button
//                   title='X'
//                   onClick={() => {
//                      removeTask(task.id);
//                   }}></Button>
//                <input
//                   type='checkbox'
//                   checked={task.isDone}
//                />{' '}
//                <span>{task.title}</span>
//             </li>
//          );
//       })
//    ) : (
//       <div> No Data</div>
//    );

//    const inputRef = useRef<HTMLInputElement>(null);

//    return (
//       <div>
//          <h3>{title}</h3>
//          <div>
//             <input ref={inputRef} />
//             <Button
//                onClick={() => {
//                   if (inputRef.current) {
//                      addTask(inputRef.current.value);
//                      inputRef.current.value = '';
//                   }
//                }}
//                title='+'></Button>
//          </div>
//          <ul>{mappedTasks}</ul>
//          <div>
//             <Button
//                onClick={() => {
//                   changeFilter('All');
//                }}
//                title='All'
//             />
//             <Button
//                onClick={() => {
//                   changeFilter('Active');
//                }}
//                title='Active'
//             />
//             <Button
//                onClick={() => {
//                   changeFilter('Completed');
//                }}
//                title='Completed'
//             />
//          </div>
//       </div>
//    );
// };
