import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: "idle",
};

export const typingSlice = createSlice({
    name: "typing",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
});

export const { increment } = typingSlice.actions;

export default typingSlice.reducer;