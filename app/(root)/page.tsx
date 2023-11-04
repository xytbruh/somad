import Container from "@/components/container";
import ProductList from "@/components/product-list";
import React from "react";
import Banner from "./components/banner";
import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const banner = await getBanner();
  return (
    <>
      <Container>
        <Banner data={banner} />
        <div className="py-8">
          <ProductList title="Produk Terbaru" items={products} />
          <div className="flex items-center py-8 justify-center">
            <Link href="/product" className="text-white px-4 py-2 rounded-lg bg-green-600">
              All Produk
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4">
          <div className="col-span-2  bg-[#F2F2F2] rounded-lg">
            <h1 className="text-center font-bold text-3xl py-16">
              The Hype is real...
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <Image src="/foto.png" width="1000" height="1000" alt="" />
              <div className="m-auto text-center">
                <p className="font-bold text-xl">
                  These stylishly simple and incredibly comfortable shoes have
                  become such a staple in my daily wardrobe that I&quot;m
                  already buying a second pair.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#F2F2F2] rounded-lg">
            <Image src="/foto2.png" width="600" height="600" alt="" />
            <div className="flex items-center justify-between p-4">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">Title</h1>
                <p className="font-light text-xs">Navy</p>
              </div>
              <Button className="bg-green-500 py-1 px-3">Shop now</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
