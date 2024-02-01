import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <h1 className="text-textColor/90 text-3xl font-bold capitalize">
        {title}
      </h1>

      {href && (
        <button className="btn btn-sm !text-textColor">
          {<Link href={""}>see all</Link>}
        </button>
      )}
    </div>
  );
}
