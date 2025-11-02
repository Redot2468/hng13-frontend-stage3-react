import { PropsWithChildren } from "react";

import Cart from "@/app/_components/cart/Cart";
import Footer from "@/app/_components/ui/Footer";
import Navbar from "@/app/_components/ui/Navbar";
import { Toaster } from "@/app/_components/ui/sonner";
import ConvexClientProvider from "@/app/_lib/convex/ConvexClientProvider";
import ReduxProvider from "@/app/_lib/redux/ReduxProvider";
import { manrope } from "@/app/_styles/font";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Audiophile",
    default: "Home - Audiophile",
  },
  description: "An audio e-commerce store to purchase your audio products.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <ReduxProvider>
          <Navbar />
          <main>
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
          <Footer />

          <Cart />
          <Toaster position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
