const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => ({ type: ADD_TASK, payload: text });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });

const initialState = {
    tasks: [],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload.id ? { ...task, completed: !task.completed } : task)),
            };
        default:
            return state;
    }
}
