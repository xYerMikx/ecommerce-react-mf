import { fetchProductsThunk } from "@/redux/thunks/fetchProductsThunk";
import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

export type ProductsState = {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
};

const initialState: ProductsState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
