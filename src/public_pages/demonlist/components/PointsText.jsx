import { ChartNoAxesCombinedIcon, PercentDiamondIcon } from "lucide-react";

const getPointsText = (points, list_percent) => {
  if (points === 0) return null;

  return (
    <>
      <p
        title="Points given when you beat the level."
        className="group relative w-fit cursor-help text-sm font-light text-green-400"
      >
        <ChartNoAxesCombinedIcon className="mb-1 inline h-4 w-4" />{" "}
        {points.toLocaleString("en-US")}
      </p>
      {list_percent !== 100 && (
        <p
          title="Minimum percentage to submit a record for this level."
          className="w-fit cursor-help text-sm font-light text-cyan-400"
        >
          <PercentDiamondIcon className="mb-1 inline h-4 w-4" /> {list_percent}%
        </p>
      )}
    </>
  );
};

export default getPointsText;
