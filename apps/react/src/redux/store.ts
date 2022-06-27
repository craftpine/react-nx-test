import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(
    persistConfig,
    persistReducer(persistConfig, reducers)
);

declare global {
    interface Window {
        MyNamespace: any;
    }
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

if (process.env["NODE_ENV"] !== 'production') {
    enhancers.push(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any)?.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

const store = createStore(persistedReducer, compose(...enhancers));

const persistor = persistStore(store);

// const { persistor, store } = configureStore(middlewares);
sagaMiddleware.run(rootSaga);

export { store, persistor };