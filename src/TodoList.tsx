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

import React from 'react';
import { Task } from './Task';

export type TasksProps = {
   id: number;
   title: string;
   isDone: boolean;
};

type PropsType = {
   title: string;
   tasks: TasksProps[];
};

export const Todolist = ({ title, tasks }: PropsType) => {
   const mappedTasks = tasks.length ? (
      tasks.map((task) => {
         return <Task {...task} />;
      })
   ) : (
      <div> No Data</div>
   );

   return (
      <div>
         <h3>{title}</h3>
         <div>
            <input />
            <button>+</button>
         </div>
         <ul>{mappedTasks}</ul>
         <div>
            <Button title='All' />
            <Button title='Active' />
            <Button title='Completed' />
         </div>
      </div>
   );
};
