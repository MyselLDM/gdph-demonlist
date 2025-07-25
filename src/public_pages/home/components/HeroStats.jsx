import { useQuery } from "@tanstack/react-query";
import { getHeroStats } from "./queries/herostats";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ChartColumnBig } from "lucide-react";

const HeroStats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hero_stats"],
    queryFn: getHeroStats,
  });

  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const cleanStats = {
    Records: data.record_count,
    Players: data.player_count,
    Levels: data.level_count,
    Packs: data.pack_count,
    "Pack Ranks": data.pack_rank_count,
    Points: data.player_points_total,
  };

  return (
    <motion.section
      className="mt-5 flex w-full flex-col gap-2 border-t-2 border-neutral-300 pt-5 md:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.1, 0.8, 0.37, 0.99],
      }}
    >
      <motion.div className="flex w-100 flex-col">
        <h2 className="main-title text-xl font-bold text-blue-500 lg:text-2xl">
          <ChartColumnBig className="mr-1 mb-1 inline h-10 w-10 rounded-full bg-blue-500 p-2 text-neutral-50 md:h-12 md:w-12" />{" "}
          Our Proud Statistics
        </h2>
        <h3 className="text-xl font-light text-neutral-500">
          These are the achievements we are proud of!
        </h3>
      </motion.div>

      <div className="flex w-full flex-row flex-wrap gap-4">
        {Object.entries(cleanStats).map(([key, value], i) => (
          <motion.div
            key={key}
            className="bg-neutral flex flex-grow flex-col items-center rounded-lg bg-blue-100 p-5 shadow-xl shadow-blue-800/15"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.1, 0.8, 0.37, 0.99],
              delay: i * 0.1,
            }}
          >
            <p className="text-2xl font-bold text-blue-500 md:text-3xl">
              <CountUp end={value} duration={1.5} />
            </p>
            <p className="text-center text-lg font-light text-blue-600">
              {key}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HeroStats;
