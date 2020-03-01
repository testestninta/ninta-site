import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import persistReducer from './persistReducer';

import history from '../services/history';

const middlewares = [routerMiddleware(history), thunk];

const persistedReducer = persistReducer(rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
