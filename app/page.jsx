import BoardSlider from "@/components/boardSlider/BoardSlider";
import GenresGroup from "@/components/genres/GenresGroup";
import Next7DayOnAir from "@/components/onAir7day/Next7DayOnAir";
import TitleContainer from "@/components/title/TitleContainer";
import Recently from "@/components/trending/Recently";
import Trending from "@/components/trending/Trending";
import TrendingActor from "@/components/trendingActor/TrendingActor";

export default function Home() {
  return (
    <main>
      <BoardSlider />
      <section className="w-full px-16 flex flex-col justify-start items-start gap-16 overflow-x-hidden">
        
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="recently" href="#" />
          <Recently />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending" href={"#"} />
          <Trending />
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="next 7 days on air" href="#" />
          <Next7DayOnAir />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title="trending people" href="#" />
          <TrendingActor />
        </section>
      </section>
    </main>
  );
}
