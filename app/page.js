import BoardSlider from "@/components/boardSlider/BoardSlider";
import TitleContainer from "@/components/title/TitleContainer";
import Trending from "@/components/trending/Trending";

export default function Home() {
  return (
    <main>
      <BoardSlider />
      <section className="w-full px-20 flex flex-col justify-start items-start gap-5 overflow-x-hidden">
        <Trending />
      </section>
    </main>
  );
}
