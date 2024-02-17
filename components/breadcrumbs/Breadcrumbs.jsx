import Link from "next/link";
import React from "react";

export default function Breadcrumbs({ data }) {
  return (
    <div className="breadcrumbs text-base text-textColor/50 *:capitalize">
      <ul>
        {data?.map((items, index) => (
          <li key={items.address + index}>
            {items.link ? (
              <Link href={items.link}>{items.address}</Link>
            ) : (
              items.address
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
