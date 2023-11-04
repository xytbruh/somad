import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/navbar";
import Theme from "@/providers/theme-provider";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Somad",
  description: "Somad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <html lang="en">
        <body className="font-montserrat">
          <ModalProvider />
          <ToastProvider />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </Theme>
  );
}
