import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'http://localhost:4000/contacts';

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export const getContacts = createAsyncThunk(
    'phonebook/getContacts',
    async () => {
        const response = await fetch(`${url}`);
        const result = await response.json();
        return result;
    },
);

export const addContact = createAsyncThunk(
    'phonebook/add',
    ({ id, name, number }) => {
        const contact = { id, name, number };
        postData(url, contact);
    },
    // async (id, name, number) => {
    //     if (name && number && id) {
    //         const contact = { id, name, number };
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(contact),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //     }
    // },
);

export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/filter');
