import "./globals.css";
import { Inter, Nunito, Ubuntu } from "next/font/google";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "@vidstack/react/player/styles/base.css";

const defaultFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "MovieLand",
  description: "Movie, Tv Shows and Animation",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
