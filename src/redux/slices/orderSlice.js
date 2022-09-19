import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItems(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if(findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ... action.payload,
                    count: 1
                })
            }
            
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
    }  
}) 

export const { addItems, removeItem} = orderSlice.actions;

export default orderSlice.reducer;