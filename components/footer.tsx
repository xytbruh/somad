"use client";
import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full bg-[#02021D] p-8 mt-auto">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white  text-center md:justify-between">
        <h1>SOMAD</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 SOMAD
      </Typography>
    </footer>
  );
}
