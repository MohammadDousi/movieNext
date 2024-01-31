"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

import { useRouter } from "next/navigation";
export default function Header() {
  const [scroll, setScroll] = useState();

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      return window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          scroll < 100
            ? "w-full h-20 px-20 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent flex flex-row justify-between items-center duration-300"
            : "w-full h-20 px-20 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent/30 backdrop-blur-2xl flex flex-row justify-between items-center duration-300"
        }
      >
        <div className="menuContainer">
          <Image
            onClick={() => router.push("/", { scroll: true })}
            src={logo}
            alt="logo movieland"
            loading="lazy"
            className="w-auto h-1/2 relative object-contain cursor-pointer"
          />
          <section className="menu">
            <h2>movie</h2>
            <h2>serial</h2>
            <h2>Animation</h2>
            <h2>about us</h2>
          </section>
        </div>

        <div className="w-1/3 flex flex-row justify-end items-center gap-4">
          <button className="size-8 bg-textColor hover:bg-secondeColor flex justify-center items-center rounded-full duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="h-8 px-5 text-textColor hover:text-primeryColor font-medium text-base ring-1 ring-textColor hover:ring-0 ring-offset-0 bg-textColor/10 hover:bg-secondeColor backdrop-blur-xl hover:backdrop-blur-0 flex justify-center items-center rounded-full duration-300">
            Sign in | Sign up
          </button>
        </div>
      </header>
    </>
  );
}
