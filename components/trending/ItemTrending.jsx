import React from "react";

import Image from "next/image";

export default function ItemTrending({ data }) {
  return (
    <>
      {console.log(data)}

      {data &&
        data.map((items) => (
          <div
            key={items.id}
            className="w-1/5 flex flex-col justify-start items-start gap-3 overflow-hidden"
          >
            <div className="w-full relative h-72 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover duration-300 cursor-pointer lg:hover:blur-sm"
                src={"https://image.tmdb.org/t/p/original/" + items.poster_path}
                alt={"https://image.tmdb.org/t/p/original/" + items.poster_path}
              />

              <div className="size-9 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/100 ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                {items.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="w-full px-1 flex flex-col gap-1">
              <h2 className="w-full font-medium text-base text-left text-textColor/70 tracking-normal">
                {items.title ||
                  items.original_title ||
                  items.name ||
                  items.original_name}
              </h2>
              <h3 className="w-full font-normal text-sm text-left text-textColor/40">
                {items.release_date || items.first_air_date}
              </h3>
            </div>
          </div>
        ))}
    </>
  );
}
