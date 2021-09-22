import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContact,
    changeFilter,
    deleteContact,
    getContacts,
} from './actions';

const items = createReducer([], {
    [getContacts.fulfilled]: (_, { payload }) => [...payload],
    [addContact.fulfilled]: (state, payload) => [...state, payload.meta.arg],
    [deleteContact.fulfilled]: (state, payload) => [
        ...state.filter(({ id }) => id !== payload.meta.arg),
    ],
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});
