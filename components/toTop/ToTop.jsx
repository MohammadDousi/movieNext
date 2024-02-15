"use client";
import { useState, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function ToTop() {
  const [scroll, setScroll] = useState(0);

  const up = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => up()}
      className={
        scroll >= 1000
          ? "size-10 hover:size-11 fixed z-50 left-5 lg:left-16 bottom-5 pb-0.5 bg-accentColor/20 backdrop-blur-xl hover:shadow-2xl shadow-primeryColorDarker rounded-xl duration-300 cursor-pointer flex justify-center items-center"
          : "hidden"
      }
    >
      <IoChevronUp className="size-5 text-textColor" />
    </div>
  );
}
