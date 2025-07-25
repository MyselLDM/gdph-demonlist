import Changelog from "./components/Changelog";
import HeroSection from "./components/HeroSection";
import HeroStats from "./components/HeroStats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroStats />
      <Changelog />
    </>
  );
}
