import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import React from "react";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });
  return (
    <div className="bg-white my-12">
      <Container>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
          {products.length === 0 && <p>Tidak Ada</p>}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
