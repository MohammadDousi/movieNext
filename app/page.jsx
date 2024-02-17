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
    <>
      <BoardSlider />
      <section className="w-full h-full px-6 lg:px-16 flex flex-col justify-start items-start gap-10 lg:gap-16">
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer
            title="trending movie"
            href={"/category/trending movie"}
          />
          <TrendingMovie />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer
            title="popular movie"
            href={"/category/popular movie"}
          />
          <PopularMovie />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer
            title="trending tv"
            href={"/category/trending tv shows"}
          />
          <TrendingTv />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer
            title="popular tv"
            href={"/category/top 250 tv shows"}
          />
          <PopularTv />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending people" />
          <TrendingActor />
        </section>
      </section>
      <ToTop />
    </>
  );
}
