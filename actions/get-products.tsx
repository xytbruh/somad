import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;
interface Query {
  categoryId?: string;

  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,

      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);
  return res.json();
};

export default getProducts;
