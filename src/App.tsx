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

import { Todolist } from './TodoList';

type TasksProps = {
   id: number;
   title: string;
   isDone: boolean;
};

function App() {
   const title1 = 'what to learn - 1';
   const title2 = 'what to learn - 2';
   const tasks1: TasksProps[] = [
      { id: 1, title: 'HTML&CSS', isDone: true },
      { id: 2, title: 'JS', isDone: true },
      { id: 3, title: 'ReactJS', isDone: false },
      { id: 4, title: 'Redux', isDone: false },
   ];

   const tasks2: TasksProps[] = [];
   return (
      <div className='App'>
         <Todolist
            title={title1}
            tasks={tasks1}
         />
         <Todolist
            title={title2}
            tasks={tasks2}
         />
      </div>
   );
}

export default App;
