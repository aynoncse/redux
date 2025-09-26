import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// Product states
const initialProductState = {
    products: ['Sugar', 'Salt'],
    numberOfProducts: 2,
};

// Product actions
const getProducts = () => ({ type: GET_PRODUCTS });
const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });

// Product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload], numberOfProducts: state.numberOfProducts + 1 };
        default:
            return state;
    }
};

// store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct('Pepper'));
store.dispatch(addProduct('Flour'));
