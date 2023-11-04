"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";
import Button from "./ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      {/* <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div> */}
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
          <p className="font-semibold text-black">Kategori:</p>
          <div>{data?.category.name}</div>
        </div>      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-green-600"
        >
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
