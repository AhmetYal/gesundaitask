import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "cart",
  initialState: {
    user: [],
    totalValue: 0,
  },
  reducers: {
    addProduct: (state, action) => {},

    deleteProduct: (state, action) => {
      const product = action.payload;
      const filtered = state.products.filter((item) => item.id !== product.id);
      state.products = filtered;
    },
  },
});

export const { addProduct, deleteProduct } = CardSlice.actions;

export default CardSlice.reducer;
