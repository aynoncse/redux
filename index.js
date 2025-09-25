import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

import store from './store.js';

import { increment, decrement } from './reducers/counterReducer.js';
import { addTask, toggleTask } from './reducers/todoReducer.js';

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

decrementButton.addEventListener('click', () => store.dispatch(decrement()));
incrementButton.addEventListener('click', () => store.dispatch(increment()));

store.subscribe(() => {
    const state = store.getState();
    console.log(state);

    countElement.textContent = state.counter.count;
});
