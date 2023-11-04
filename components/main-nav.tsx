"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Category } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "./ui/button";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));
  return (
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            pathName === "/" ? "text-black" : "text-neutral-500"
          )}
        >
          Home
        </Link>
      </li>
      {routes.map((nav) => (
        <li key={nav.href}>
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              nav.active ? "text-black" : "text-neutral-500"
            )}
            href={nav.href}
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
