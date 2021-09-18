import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './reducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
