import TitleContainer from "@/components/title/TitleContainer";
import TrendingMovie from "@/components/trending/TrendingMovie";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen mt-10 flex flex-col justify-center items-center gap-4">
      <h2 className="text-accentColor text-3xl font-bold capitalize">
        page not found
      </h2>
      <p className="text-textColor/70 text-base">
        Page not found for this section. Maybe an error has occurred.Try again
        later.
      </p>

      <button className="btn !text-textColor">
        <Link href="/">Return Home</Link>
      </button>

      <section className="w-full px-20 flex flex-col justify-start items-start gap-14 overflow-x-hidden">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="recently" />
          <TrendingMovie />
        </section>
      </section>
    </div>
  );
}
