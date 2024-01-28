import React from "react";

export default function Header() {
  return (
    <section className="w-full px-20 py-5 absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-primeryColor to-transparent backdrop-blur-sm flex flex-row justify-between items-center">
      <div className="w-2/3"></div>
      <div className="w-1/3 flex flex-row justify-end items-center gap-3">
        <button className="classButton">Log in</button>

        <button className="classButton">Log in</button>
      </div>
    </section>
  );
}
