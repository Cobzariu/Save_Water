import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

//const configureStore = createStore(rootReducer, applyMiddleware(...middleware));

//export default configureStore;

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return {store, persistor};
};
