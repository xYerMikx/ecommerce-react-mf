import { ProductCard } from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectProducts } from "@/redux/selectors/products";
import { fetchProductsThunk } from "@/redux/thunks/fetchProductsThunk";
import React, { useEffect } from "react";
import { Flex } from "antd";

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  return (
    <Flex wrap={true} justify="space-between" gap={16}>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Flex>
  );
};
