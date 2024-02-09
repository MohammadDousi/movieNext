import BoardSlider from "@/components/boardSlider/BoardSlider";
import PopularMovie from "@/components/popular/PopularMovie";
import PopularTv from "@/components/popular/PopularTv";
import TitleContainer from "@/components/title/TitleContainer";
import ToTop from "@/components/toTop/ToTop";
import TrendingMovie from "@/components/trending/TrendingMovie";
import TrendingTv from "@/components/trending/TrendingTv";
import TrendingActor from "@/components/trendingActor/TrendingActor";

export default function Home() {
  return (
    <main>
      <BoardSlider />
      <section className="w-full px-6 lg:px-16 flex flex-col justify-start items-start gap-10 lg:gap-16 overflow-x-hidden">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending movie" href={"/category/trending-movie"} />
          <TrendingMovie />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending tv" href={"/category/trending-tv"} />
          <TrendingTv />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="popular movie" href={"/category/popular-movie"} />
          <PopularMovie />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="popular tv" href={"/category/top-250-tv"} />
          <PopularTv />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending people" href="#" />
          <TrendingActor />
        </section>
      </section>

      <ToTop />
    </main>
  );
}