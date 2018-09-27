import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './saga/index';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState = {}) {
    const middlewares = [
        logger,
        sagaMiddleware
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares))
    ];

    const store = createStore(
        reducers
        , initialState
        , compose(...enhancers)
    );

    sagaMiddleware.run(rootSaga);
    store.asyncReducers = {};

    return store
}