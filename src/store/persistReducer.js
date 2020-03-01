import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const PersistReducerWrapper = reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'discordConfig',
      whitelist: ['auth', 'user'],
      storage
    },
    reducers
  );

  return persistedReducer;
};

export default PersistReducerWrapper;
