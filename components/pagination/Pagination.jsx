import React from "react";

export default function Pagination({ page, totalPage, handleClick }) {
  console.log(page, totalPage);

  return (
    <div className="join flex gap-2">
      <button
        name={totalPage - totalPage + 1}
        onClick={() => {
          handleClick(100);
        }}
        className={
          page == totalPage - totalPage + 1
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage - totalPage + 1}
      </button>
      <button
        name={totalPage - totalPage + 2}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page == totalPage - totalPage + 2
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage - totalPage + 2}
      </button>
      <button
        name={totalPage - totalPage + 3}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page == totalPage - totalPage + 3
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage - totalPage + 3}
      </button>

      <button className={page >= 6 ? "join-item btn-disabled px-1" : "hidden"}>
        ...
      </button>

      <button
        name={Number(page) - Number(2)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page >= 6
            ? "join-item hidden lg:flex btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {Number(page) - Number(2)}
      </button>

      <button
        name={Number(page) - Number(1)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page >= 5 ? "join-item btn btn-sm lg:btn-md !btn-circle " : "hidden"
        }
      >
        {Number(page) - Number(1)}
      </button>

      <button
        name={Number(page)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page >= 4
            ? "join-item btn btn-sm lg:btn-md !btn-circle btn-active btn-primary"
            : "hidden"
        }
      >
        {Number(page)}
      </button>

      <button
        name={Number(page) + Number(1)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page >= 3 && page < totalPage
            ? "join-item btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {page >= 3 && page < totalPage && Number(page) + Number(1)}
      </button>

      <button
        name={Number(page) + Number(2)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          page >= 3 && page < totalPage - 1
            ? "join-item hidden lg:flex btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {page >= 3 && page < totalPage && Number(page) + Number(2)}
      </button>

      <button
        className={
          page < 0 || Number(page) >= Number(totalPage) - Number(4)
            ? "hidden"
            : "join-item btn-disabled px-1"
        }
      >
        ...
      </button>

      <button
        name={Number(totalPage) - Number(1)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        value={Number(totalPage) - Number(1)}
        className={
          Number(page) >= Number(totalPage) - Number(4)
            ? "hidden"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {Number(totalPage) - Number(1)}
      </button>

      <button
        name={Number(totalPage)}
        onClick={(e) => {
          handleClick(e.target.name);
        }}
        className={
          Number(page) >= Number(totalPage) - Number(4)
            ? "hidden"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {Number(totalPage)}
      </button>
    </div>
  );
}
