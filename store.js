import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import todoReducer from './reducers/todoReducer.js';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
