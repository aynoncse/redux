// State - count: 0
// Action - INCREMENT, DECREMENT, RESET
// Reducer
// Store

const { createStore } = require('redux');

// constants

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
    count: 0,
};

const incrementCounterAction = () => ({
    type: INCREMENT,
});

const decrementCounterAction = () => ({
    type: DECREMENT,
});

const resetCounterAction = () => ({
    type: RESET,
});

// Creating reducer

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
