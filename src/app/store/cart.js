import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
        count: 0,
        bilets: []
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
        deleteAllCart: (state, action) => {
            state.itemsInCart = state.itemsInCart = [];
        },
        setBilets: (state, action) => {
            state.bilets.push(action.payload);
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
    deleteAllCart,
    setBilets,
    increment,
    decrement,
    setCount
} = cartSlice.actions;
export default cartSlice.reducer;
