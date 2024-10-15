import { v1 } from 'uuid';
import { todolistsType } from '../todos-reducer';
import {
   AddTaskAC,
   AddTodolistAC,
   ChangeTaskStatusAC,
   ChangeTaskTitleAC,
   ChangeTodolistFilter,
   ChangeTodolistTitleAC,
   RemoveTaskAC,
   removeTodolistAC,
   todosReducer,
} from '../todos-reducer';

let startState: todolistsType[];
let todolistId1 = v1();
let todolistId2 = v1();
let taskId1 = v1();

beforeEach(() => {
   startState = [
      {
         id: todolistId1,
         title: 'What to learn',
         filter: 'All',
         tasks: [
            { id: taskId1, title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: true },
            { id: v1(), title: 'Redux', isDone: false },
            { id: v1(), title: 'Git', isDone: false },
            { id: v1(), title: 'Webpack', isDone: false },
         ],
      },
      {
         id: todolistId2,
         title: 'What to buy',
         filter: 'All',
         tasks: [
            { id: v1(), title: 'milk', isDone: true },
            { id: v1(), title: 'potato', isDone: true },
         ],
      },
   ];
});

test('todolist should be removed', () => {
   const endState = todosReducer(startState, removeTodolistAC(todolistId1));
   expect(endState.length).toBe(1);
   expect(endState[0].id).toBe(todolistId2);
});

test('todolist should be add correct', () => {
   const newTodolist = 'newTodolist';
   const endState = todosReducer(startState, AddTodolistAC(newTodolist));
   expect(endState.length).toBe(3);
   expect(endState[2].title).toBe(newTodolist);
});

test('change todolist title should be correct', () => {
   const newTodolistTitle = 'New title';

   const endState = todosReducer(
      startState,
      ChangeTodolistTitleAC({
         todolistId: todolistId2,
         title: newTodolistTitle,
      })
   );
   expect(endState[0].title).toBe('What to learn');
   expect(endState[1].title).toBe(newTodolistTitle);
});

test('change todolist filter should be correct', () => {
   const endState = todosReducer(
      startState,
      ChangeTodolistFilter({ id: todolistId2, filter: 'Completed' })
   );
   expect(endState[0].filter).toBe('All');
   expect(endState[1].filter).toBe('Completed');
});

test('add task should be correct', () => {
   const endState = todosReducer(
      startState,
      AddTaskAC({ todolistId: todolistId2, taskNewTitle: 'NEW TASK' })
   );
   expect(endState[1].tasks.length).toBe(3);
   expect(endState[1].tasks[2].title).toBe('NEW TASK');
});

test('remove task should be correct', () => {
   const endState = todosReducer(
      startState,
      RemoveTaskAC({ todolistId: todolistId1, taskId: taskId1 })
   );
   expect(endState[0].tasks[0].title).toBe('JS');
   expect(endState[0].tasks.length).toBe(5);
});

test('change task status should be correct', () => {
   const endState = todosReducer(
      startState,
      ChangeTaskStatusAC({
         todolistId: todolistId1,
         taskId: taskId1,
         taskStatus: false,
      })
   );
   expect(endState[0].tasks[0].isDone).toBe(false);
});

test('change task title should be correct', () => {
   const newTaskTitle = 'New task';

   const endState = todosReducer(
      startState,
      ChangeTaskTitleAC({
         todolistId: todolistId1,
         taskId: taskId1,
         newTitle: newTaskTitle,
      })
   );
   expect(endState[0].tasks[0].title).toBe(newTaskTitle);
   expect(endState[0].tasks[1].title).toBe('JS');
});
