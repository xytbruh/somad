import getAllProduct from "@/actions/get-all-product";
import ProductList from "@/components/product-list";
import React from "react";

const Product = async () => {
  const products = await getAllProduct();
  return (
    <div>
      <ProductList title="Semua Produk" items={products} />
    </div>
  );
};

export default Product;
