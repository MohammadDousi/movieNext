import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <div className="w-full flex flex-row justify-between items-center ">
        <h1 className="text-textColor/90 text-3xl font-bold capitalize">{title}</h1>

        {/* {href && (
          <Link
            href={`/${href}`}
            className="text-white/40 text-sm capitalize rounded-full cursor-pointer duration-300 hover:text-cyan-500"
          >
            see all
          </Link>
        )} */}
      </div>
    </div>
  );
}
