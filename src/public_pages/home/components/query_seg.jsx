// components/HeroStats.tsx
import { useQuery } from "@tanstack/react-query";
import { getHeroStats } from "./query";

const HeroStats = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hero_stats"],
    queryFn: getHeroStats,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  if (data) console.log(data);

  return (
    <div>
      <h2>Hero Stats</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HeroStats;
