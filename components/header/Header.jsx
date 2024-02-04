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
            ? "w-full h-20 px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-10% from-primeryColor to-transparent flex flex-row justify-between items-center duration-300"
            : "w-full h-20 px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent/30 backdrop-blur-2xl flex flex-row justify-between items-center duration-300"
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
          <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
            <ul className="dropdown dropdown-hover">
              <li tabIndex={0}>movie</li>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow w-56"
              >
                <li>
                  <Link href={`/category/popular-movie?page=1`}>popular</Link>
                </li>
                <li>
                  <Link href={`/category/now-playing-movie?page=1`}>now playing</Link>
                </li>
                <li>
                  <Link href={`/category/upcoming-movie?page=1`}>upcoming</Link>
                </li>
                <li>
                  <Link href={`/category/top-250-movie?page=1`}>Top 250 movies</Link>
                </li>
              </ul>
            </ul>
            <ul className="dropdown dropdown-hover">
              <li tabIndex={1}>serial</li>
              <ul
                tabIndex={1}
                className="dropdown-content z-[1] p-2 shadow w-56"
              >
                <li>
                  <Link href={"/category/popular-serial"}>popular</Link>
                </li>
                <li>
                  <Link href={"/category/on-air-serial"}>on the air</Link>
                </li>
                <li>
                  <Link href={"/category/top-250-serial"}>Top 250 series</Link>
                </li>
              </ul>
            </ul>

            <li tabIndex={1}>Animation</li>
            <li tabIndex={1}>pepole</li>

            <ul className="dropdown dropdown-hover">
              <li tabIndex={1}>...</li>
              <ul
                tabIndex={1}
                className="dropdown-content z-[1] menu p-2 shadow w-56"
              >
                <li>
                  <Link href={""}>about us</Link>
                </li>
                <li>
                  <Link href={""}>Advertising</Link>
                </li>
              </ul>
            </ul>
          </ul>
        </div>

        <div className="w-1/3 flex flex-row justify-end items-center gap-4">
          <button className="btn btn-sm btn-circle !text-textColor !px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="btn btn-sm btn-primary">Sign in | Sign up</button>
        </div>
      </header>
    </>
  );
}
