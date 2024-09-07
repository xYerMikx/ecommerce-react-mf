import React from "react";
import { Card, Button } from "antd";
import { Product } from "@/types/product";
import styles from "./styles.module.scss";

type ProductCardProps = {
  product: Product;
};

const { Meta } = Card;

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      hoverable
      cover={
        <img className={styles.image} alt={product.title} src={product.image} />
      }
      actions={[<Button type="primary">Add to Favorites</Button>]}
      style={{ width: 300 }}
    >
      <Meta title={product.title} description={`$${product.price}`} />
    </Card>
  );
};
