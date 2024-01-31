import TitleContainer from "@/components/title/TitleContainer";
import Recently from "@/components/trending/Recently";
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="w-full h-screen mt-10 flex flex-col justify-center items-center gap-4">
      <h2 className="text-textColor/90 text-3xl font-bold capitalize">
        page not found
      </h2>
      <p className="text-textColor/70 text-base">
        Page not found for this section. Maybe an error has occurred.Try again
        later.
      </p>

      <button className="h-8 px-5 text-textColor hover:text-primeryColor font-medium text-base ring-1 ring-textColor hover:ring-0 ring-offset-0 bg-textColor/10 hover:bg-secondeColor backdrop-blur-xl hover:backdrop-blur-0 flex justify-center items-center rounded-full duration-300">
        <Link href="/">Return Home</Link>
      </button>

      <section className="w-full px-20 flex flex-col justify-start items-start gap-14 overflow-x-hidden">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="recently" />
          <Recently />
        </section>
      </section>
    </div>
  );
}
