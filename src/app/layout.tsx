import { PropsWithChildren } from "react";

import { manrope } from "@/styles/font";
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
      <body>
        <header>Navbar</header>
        <main className={`${manrope.className} antialiased`}>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
