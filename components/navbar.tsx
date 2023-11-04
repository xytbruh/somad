import { User } from "lucide-react";
import React from "react";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import CartButton from "./cart-button";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <>
      <header className="bg-[#02021D] p-2">
        <p className="text-white text-center text-xs font-normal">
          Free US shipping on order $80+
        </p>
      </header>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  top-0 sticky bg-white z-40 py-4  text-center md:justify-between lg:px-12 px-4">
        <h1>SOMAD</h1>
        <MainNav data={categories} />

        <CartButton />
      </div>
    </>
  );
};

export default Navbar;
