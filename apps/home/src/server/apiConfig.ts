import axios from "axios";

export const productsApiInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: { "Content-Type": "application/json" },
});
