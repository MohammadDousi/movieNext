"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

import { useRouter } from "next/navigation";
export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const [scroll, setScroll] = useState(0);
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

  const showMenuMobileHandler = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  return (
    <>
      <header
        className={
          scroll < 100
            ? "w-full h-14 lg:h-20 px-6 lg:px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-10% from-primeryColor to-transparent flex flex-row justify-between items-center gap-20 duration-300 "
            : "w-full h-14 lg:h-20 px-6 lg:px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent/30 backdrop-blur-2xl flex flex-row justify-between items-center gap-20 duration-300"
        }
      >
        <Image
          onClick={() => router.push("/", { scroll: true })}
          src={logo}
          alt="logo movieland"
          loading="lazy"
          className="w-auto h-1/2 z-10 relative object-contain cursor-pointer"
        />

        <div className="hidden w-2/3 h-full lg:flex flex-row justify-start items-center">
          <ul className="menu menu-horizontal rounded-box">
            <ul className="dropdown dropdown-hover">
              <li tabIndex={0}>movie</li>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow w-56"
              >
                <li>
                  <Link href={`/category/popular-movie`}>popular</Link>
                </li>
                <li>
                  <Link href={`/category/now-playing-movie`}>now playing</Link>
                </li>
                <li>
                  <Link href={`/category/upcoming-movie`}>upcoming</Link>
                </li>
                <li>
                  <Link href={`/category/top-250-movie`}>Top 250 movies</Link>
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

        <div
          className={
            showMenuMobile
              ? "join join-vertical lg:hidden showMenuMobileOpen"
              : "join join-vertical lg:hidden showMenuMobileClose"
          }
        >
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">Movie</div>
            <div className="collapse-content">
              <ul className="menu pb-20">
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={`/category/popular-movie`}>popular</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={`/category/now-playing-movie`}>now playing</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={`/category/upcoming-movie`}>upcoming</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={`/category/top-250-movie`}>Top 250 movies</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">serial</div>
            <div className="collapse-content">
              <ul className="menu">
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={"/category/popular-serial"}>popular</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={"/category/on-air-serial"}>on the air</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={"/category/top-250-serial"}>Top 250 series</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse">
            <input type="radio" name="my-accordion-2" />
            <div
              onClick={() => showMenuMobileHandler()}
              className="collapse-title"
            >
              Animation
            </div>
          </div>

          <div className="collapse">
            <input type="radio" name="my-accordion-2" />
            <div
              onClick={() => showMenuMobileHandler()}
              className="collapse-title"
            >
              pepole
            </div>
          </div>

          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">about us</div>
            <div className="collapse-content">
              <ul className="menu">
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={""}>about us</Link>
                </li>
                <li onClick={() => showMenuMobileHandler()}>
                  <Link href={""}>Advertising</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-row justify-end items-center gap-4">
          <button className="btn btn-sm btn-circle !text-textColor !px-0">
            <IoSearch />
          </button>

          <label className="lg:hidden btn btn-sm btn-circle !text-textColor !px-0 swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <IoMenu
              className="swap-off fill-current"
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            />
            <IoClose
              className="swap-on fill-current"
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            />
          </label>

          <button className="hidden lg:btn lg:btn-sm btn-primary">
            Sign in | Sign up
          </button>
        </div>
      </header>
    </>
  );
}
