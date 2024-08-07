// import React from 'react';
// import './App.css';
// import { TaskProps, TodoList } from './TodoList';

// function App() {
//    const title1 = 'what to learn - 1';
//    const title2 = 'what to learn - 2';
//    const tasks1 = [
//       { id: 1, title: 'HTML&CSS', isDone: true },
//       { id: 2, title: 'JS', isDone: true },
//       { id: 3, title: 'ReactJS', isDone: false },
//    ];
//    const tasks2: TaskProps[] = [];
//    return (
//       <div className='App'>
//          <TodoList
//             title={title1}
//             tasks={tasks1}
//          />
//          <TodoList
//             title={title2}
//             tasks={tasks2}
//          />
//       </div>
//    );
// }

// export default App;

/////////////////////////////////////////////////

import { useState } from 'react';
import { Todolist } from './TodoList';
import { v1 } from 'uuid';

type TasksProps = {
   id: string;
   title: string;
   isDone: boolean;
};
export type FilterType = 'All' | 'Active' | 'Completed';

function App() {
   const title1 = 'what to learn - 1';

   let [tasks, setTasks] = useState<TasksProps[]>([
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: true },
      { id: v1(), title: 'Redux', isDone: false },
      { id: v1(), title: 'Git', isDone: false },
      { id: v1(), title: 'Webpack', isDone: false },
   ]);

   const [filter, setFilter] = useState<FilterType>('All');

   const addTask = (title: string) => {
      const newTask = {
         id: v1(),
         title,
         isDone: false,
      };
      const newTasks = [newTask, ...tasks];
      setTasks(newTasks);
   };

   const removeTask = (taskId: string) => {
      setTasks(
         tasks.filter((el) => {
            return el.id !== taskId;
         })
      );
   };

   const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
      // const task = tasks.find((t) => t.id === taskId);
      // if (task) {
      //    task.isDone = taskStatus;
      //    setTasks([...tasks]);
      // }
      const newState = tasks.map((t) =>
         t.id === taskId ? { ...t, isDone: taskStatus } : t
      );
      setTasks(newState);
   };

   const changeFilter = (filter: FilterType) => {
      setFilter(filter);
   };

   let filterTasks = tasks;

   if (filter === 'Active') {
      filterTasks = tasks.filter((el) => !el.isDone);
   }
   if (filter === 'Completed') {
      filterTasks = tasks.filter((el) => el.isDone);
   }

   return (
      <div className='App'>
         <Todolist
            title={title1}
            tasks={filterTasks}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            filter={filter}
         />
      </div>
   );
}

export default App;
