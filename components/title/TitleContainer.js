import Link from "next/link";

export default function TitleContainer({ title, href }) {
  return (
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="text-textColor/90 text-3xl font-bold capitalize">
          {title}
        </h1>

        {href && (
          <Link
            href={""}
            className="h-8 px-5 text-textColor hover:text-primeryColor font-medium text-sm capitalize ring-1 ring-textColor hover:ring-0 ring-offset-0 bg-textColor/10 hover:bg-secondeColor backdrop-blur-xl hover:backdrop-blur-0 flex justify-center items-center rounded-full duration-300"
          >
            see all
          </Link>
        )}
      </div>
  );
}
