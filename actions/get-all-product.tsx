import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/product`;
const getAllProduct = async (): Promise<Product[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getAllProduct;
