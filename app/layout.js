import "./globals.css";

import Link from "next/link";
import { Inter, Nunito, Ubuntu } from "next/font/google";
import Header from "@/components/header/Header";
const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MovieLand",
  description: "Movie, Serial and Animation",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <Header />

        {children}
        <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
      </body>
    </html>
  );
}
