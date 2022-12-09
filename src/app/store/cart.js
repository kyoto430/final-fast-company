import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
        count: 0
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(
                (event) => event._id !== action.payload
            );
            state.count = 0;
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        increment: (state, action) => {
            state.count = state.count + 1;
        },
        decrement(state, action) {
            state.count = state.count - 1;
        }
    }
});

export const {
    setItemInCart,
    deleteItemFromCart,
    increment,
    decrement,
    setCount
} = cartSlice.actions;
export default cartSlice.reducer;
