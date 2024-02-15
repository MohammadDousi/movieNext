import React from "react";

export default function Pagination({ page, totalPage, handleClick }) {
  return (
    <div className="join flex gap-2">
      <button
        onClick={() => {
          handleClick(totalPage - totalPage + 1);
        }}
        className={
          page == totalPage - totalPage + 1
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage && totalPage - totalPage + 1}
      </button>
      <button
        onClick={() => {
          handleClick(totalPage - totalPage + 2);
        }}
        className={
          page == totalPage - totalPage + 2
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage && totalPage - totalPage + 2}
      </button>
      <button
        onClick={() => {
          handleClick(totalPage - totalPage + 3);
        }}
        className={
          page == totalPage - totalPage + 3
            ? "join-item btn btn-sm lg:btn-md !btn-circle  btn-active btn-primary"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage && totalPage - totalPage + 3}
      </button>

      <button className={page >= 6 ? "join-item btn-disabled px-1" : "hidden"}>
        ...
      </button>

      <button
        onClick={() => {
          handleClick(Number(page) - Number(2));
        }}
        className={
          page >= 6
            ? "join-item hidden lg:flex btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {page && Number(page) - Number(2)}
      </button>

      <button
        onClick={() => {
          handleClick(Number(page) - Number(1));
        }}
        className={
          page >= 5 ? "join-item btn btn-sm lg:btn-md !btn-circle " : "hidden"
        }
      >
        {page && Number(page) - Number(1)}
      </button>

      <button
        onClick={() => {
          handleClick(page);
        }}
        className={
          page >= 4
            ? "join-item btn btn-sm lg:btn-md !btn-circle btn-active btn-primary"
            : "hidden"
        }
      >
        {page}
      </button>

      <button
        onClick={() => {
          handleClick(Number(page) + Number(1));
        }}
        className={
          page >= 3 && page < totalPage
            ? "join-item btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {totalPage &&
          page &&
          page >= 3 &&
          page < totalPage &&
          Number(page) + Number(1)}
      </button>

      <button
        onClick={() => {
          handleClick(Number(page) + Number(2));
        }}
        className={
          page >= 3 && page < totalPage - 1
            ? "join-item hidden lg:flex btn btn-sm lg:btn-md !btn-circle "
            : "hidden"
        }
      >
        {totalPage &&
          page &&
          page >= 3 &&
          page < totalPage &&
          Number(page) + Number(2)}
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
        onClick={() => {
          handleClick(Number(totalPage) - Number(1));
        }}
        className={
          Number(page) >= Number(totalPage) - Number(4)
            ? "hidden"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage && totalPage - 1}
      </button>

      <button
        onClick={() => {
          handleClick(totalPage);
        }}
        className={
          Number(page) >= Number(totalPage) - Number(4)
            ? "hidden"
            : "join-item btn btn-sm lg:btn-md !btn-circle "
        }
      >
        {totalPage}
      </button>
    </div>
  );
}
