import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: []},
    reducers: {
        addContact: {
            reducer (state, action) {
            state.items.push(action.payload);
           },
           prepare(item) {
            return {
                payload: {
                    id: nanoid(),
                    name: item.name,
                    number: item.number,
                },
            };
           },
        },  
        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
           },
        },
});
export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

