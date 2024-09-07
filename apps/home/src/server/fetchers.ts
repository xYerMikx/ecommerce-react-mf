import { productsApiInstance } from "@/server/apiConfig";

const getProducts = async () => {
  const response = await productsApiInstance.get("/");
  return response.data;
};

export const productFetchers = {
  getProducts,
};
