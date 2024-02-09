import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-10 px-16 py-5 flex flex-col justify-center items-center bg-primeryColorDarker border-t border-textColor/15">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h1 className="w-full text-center lg:text-left text-sm font-normal text-textColor/70 capitalize">
          © 1402 . 2024 . design and Develope by{" "}
          <span className=" font-medium text-secondeColor">
            mohammad dousi
          </span>
        </h1>
      </div>
    </footer>
  );
}
