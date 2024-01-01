import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const exists = state.items.find(
        // (item) => item.title === action.payload.title
      // );
      // if (!exists) {
        state.items.push(action.payload);
      // }
    },
  },
  extraReducers: () => {},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice;