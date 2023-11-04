"use client";
import React from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

const CartButton = () => {
  const router = useRouter();
  const cart = useCart();

  return (
    <Button
      onClick={() => router.push("/cart")}
      className="flex items-center rounded-full bg-black px-4 py-2"
    >
      <ShoppingBag size={20} color="white" />
      <span className="ml-2 text-sm font-medium text-white">
        {cart.items.length}
      </span>
    </Button>
  );
};

export default CartButton;
