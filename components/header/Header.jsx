"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import logo from "../../public/logo.png";

import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";

import { useRouter } from "next/navigation";
import SignInUp from "../signInUp/SignInUp";

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY);
  //     return window.scrollY;
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const showMenuMobileHandler = () => {
    setShowMenuMobile(!showMenuMobile);
  };

  const menuMovie = [
    { name: "trending", href: "trending movie" },
    { name: "popular", href: "popular movie" },
    { name: "now playing", href: "now playing movie" },
    { name: "upcoming", href: "upcoming movie" },
    { name: "Top 250 movies", href: "top 250 movie" },
  ];

  const menuTv = [
    { name: "trending", href: "trending tv shows" },
    { name: "popular", href: "popular tv shows" },
    { name: "on the air", href: "on air tv shows" },
    { name: "Top 250 tv shows", href: "top 250 tv shows" },
  ];

  return (
    <>
      <header
        className={
          // scroll < 100
          //   ? 
            "w-full h-16 lg:h-20 px-6 lg:px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-10% from-primeryColor to-transparent flex flex-row justify-between items-center lg:gap-20 duration-300 "
            // : "w-full h-16 lg:h-20 px-6 lg:px-16 fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent/30 backdrop-blur-2xl flex flex-row justify-between items-center gap-20 duration-300"
        }
      >
        {/* <Image
          onClick={() => router.push("/", { scroll: true })}
          src={logo}
          alt="logo movieland"
          loading="lazy"
          className="w-auto h-1/2 z-10 relative object-contain cursor-pointer"
        /> */}

        {/* <div className="hidden w-2/3 h-full lg:flex flex-row justify-start items-center">
          <ul className="menu menu-horizontal rounded-box">
            <ul className="dropdown dropdown-hover">
              <li tabIndex={0}>movie</li>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow w-56"
              >
                {menuMovie.map((items) => (
                  <li
                    key={items.name}
                    onClick={() => {
                      showMenuMobileHandler();
                      router.push(`/category/${items.href}`, { scroll: true });
                    }}
                  >
                    <h5>{items.name}</h5>
                  </li>
                ))}
              </ul>
            </ul>
            <ul className="dropdown dropdown-hover">
              <li tabIndex={1}>Tv shows</li>
              <ul
                tabIndex={1}
                className="dropdown-content z-[1] p-2 shadow w-60"
              >
                {menuTv.map((items) => (
                  <li
                    key={items.name}
                    onClick={() => {
                      showMenuMobileHandler();
                      router.push(`/category/${items.href}`, { scroll: true });
                    }}
                  >
                    <h5>{items.name}</h5>
                  </li>
                ))}
              </ul>
            </ul>

            <li tabIndex={1}>pepole</li>
            <li
              tabIndex={1}
              onClick={() => router.push("https://kaktusprog.ir")}
            >
              About us
            </li>
          </ul>
        </div> */}

        {/* <div
          className={
            showMenuMobile
              ? "join join-vertical lg:hidden showMenuMobileOpen"
              : "join join-vertical lg:hidden showMenuMobileClose"
          }
        >
          <div className="collapse collapse-arrow join-item">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title">Movie</div>
            <div className="collapse-content w-auto h-auto bg-primeryColorDarker/50 rounded-xl">
              <ul className="menu">
                {menuMovie.map((items) => (
                  <li
                    key={items.name}
                    onClick={() => {
                      showMenuMobileHandler();
                      router.push(`/category/${items.href}`, { scroll: true });
                    }}
                  >
                    <h5>{items.name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title">tv shows</div>
            <div className="collapse-content w-auto h-auto bg-primeryColorDarker/50 rounded-xl">
              <ul className="menu">
                {menuTv.map((items) => (
                  <li
                    key={items.name}
                    onClick={() => {
                      showMenuMobileHandler();
                      router.push(`/category/${items.href}`, { scroll: true });
                    }}
                  >
                    <h5>{items.name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" name="my-accordion-2" />
            <div
              onClick={() => showMenuMobileHandler()}
              className="collapse-title"
            >
              pepole
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" name="my-accordion-2" />
            <div
              onClick={() => router.push("https://kaktusprog.ir")}
              className="collapse-title"
            >
              about us
            </div>
          </div>
        </div> */}

        {/* <div className="w-1/3 flex flex-row justify-end items-center gap-4">
          <button
            onClick={() => router.push("/search", { scroll: true })}
            className="btn btn-sm btn-circle !text-textColor !px-0"
          >
            <IoSearch />
          </button>

          <label
            htmlFor="modalSignInUp"
            className="lg:hidden btn btn-sm btn-circle !text-textColor !px-0"
          >
            <PiUserBold />
          </label>

          <label className="lg:hidden btn btn-sm btn-circle !text-textColor !px-0 swap swap-rotate">
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

          <label
            htmlFor="modalSignInUp"
            className="hidden lg:btn lg:btn-sm btn-primary"
          >
            Sign in | Sign up
          </label>
        </div> */}

      </header>
      {/* <input type="checkbox" id="modalSignInUp" className="modal-toggle" />
      <dialog
        id="modalSignInUp"
        role="dialog"
        className="modal bg-primeryColor/95"
      >
        <div className="modal-box lg:max-w-4xl flex flex-col lg:flex-row justify-start items-center gap-7 lg:gap-10 p-6 lg:p-10 bg-primeryColorDarker/90 duration-300 overflow-x-hidden lg:overflow-hidden">
          <Image
            src={logo}
            alt="log movie land"
            className="hidden lg:block lg:w-1/3 lg:p-5 object-contain"
          />
          <SignInUp />
        </div>
        <label className="modal-backdrop" htmlFor="modalSignInUp"></label>
      </dialog> */}
    </>
  );
}
