import BoardSlider from "@/components/boardSlider/BoardSlider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Next7DayOnAir from "@/components/onAir7day/Next7DayOnAir";
import TitleContainer from "@/components/title/TitleContainer";
import Trending from "@/components/trending/Trending";
import TrendingActor from "@/components/trendingActor/TrendingActor";

export default function Home() {
  return (
    <main>
      <BoardSlider />
      <section className="w-full px-20 flex flex-col justify-start items-start gap-14 overflow-x-hidden">
        <Trending />
        <Next7DayOnAir />
        <TrendingActor />
        </section>
      <Footer />
    </main>
  );
}
