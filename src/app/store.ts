import { combineReducers, legacy_createStore as createStore } from 'redux';
import { todosReducer } from '../features/todos/model/todos-reducer';
import { appReducer } from './app-reducer';

const rootReducer = combineReducers({
   todos: todosReducer,
   app: appReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
