import { createSlice } from '@reduxjs/toolkit';

const initialStateItem = [];

export const itemSlice = createSlice({
    name: 'item',
    initialState: {items: initialStateItem},
    reducers: {
        setItem: (state, actions) => {
            state.items = actions.payload
        }
    }
})

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;