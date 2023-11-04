"use client";
import { Banner as BannerTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { Carousel } from "@material-tailwind/react";

interface BannerProps {
  data: BannerTypes[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <Carousel className="lg:rounded-xl">
      {data.map((data) => (
        <div key={data.id}>
          <Image
            
            src={data.imageUrl}
            priority
            width="2000"
            height="2000"
            className="w-full aspect-video"
            alt={data.label}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
