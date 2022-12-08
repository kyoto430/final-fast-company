import { createSlice } from "@reduxjs/toolkit";

const seatsSlice = createSlice({
    name: "seat",
    initialState: {
        seatsItems: [],
        availableItems: [],
        bookedStatusItems: []
    },
    reducers: {
        setItemSeat: (state, action) => {
            state.seatsItems.push(action.payload);
        },
        setItemAvailableSeats: (state, action) => {
            state.availableItems.push(action.payload);
        },
        setItemBookedStatus: (state, action) => {
            state.bookedStatusItems.push(action.payload);
        }
    }
});

export const { setItemSeat, setItemAvailableSeats, setItemBookedStatus } =
    seatsSlice.actions;
export default seatsSlice.reducer;
