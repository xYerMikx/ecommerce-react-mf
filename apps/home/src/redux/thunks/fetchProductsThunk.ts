import { createAsyncThunk } from "@reduxjs/toolkit";

import { productFetchers } from "@/server/fetchers";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await productFetchers.getProducts();
    return data;
  }
);
