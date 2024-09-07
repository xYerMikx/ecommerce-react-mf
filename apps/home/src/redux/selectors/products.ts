import { RootState } from "@/redux/store/store";

export const selectProducts = (state: RootState) => state.products.products;
