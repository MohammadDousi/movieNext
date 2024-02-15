import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "@vidstack/react/player/styles/base.css";
import { ProvidersQuery } from "./providersQuery";

import { Inter, Nunito, Ubuntu } from "next/font/google";
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
        <ProvidersQuery>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProvidersQuery>
      </body>
    </html>
  );
}
