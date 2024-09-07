import { productFetchers } from "@/server/fetchers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await productFetchers.getProducts();
    return data;
  }
);
