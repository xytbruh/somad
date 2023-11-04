"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
