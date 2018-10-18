import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import { todo } from './reducers/todo';

export function configureStore(history, initialState) {

    const reducer = combineReducers({
        items: todo,
        routing: routerReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    );

    return store
}
