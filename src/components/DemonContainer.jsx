import { HammerIcon, SwordsIcon } from "lucide-react";

const DemonContainer = ({ demon, extraText }) => {
  function getTextColor(position) {
    if (position <= 75) return "shiny-main-list-text";
    if (position <= 150) return "shiny-extended-list-text";
    return "shiny-legacy-list-text";
  }
  return (
    <div className="relative flex h-full w-full flex-grow items-center gap-5 rounded-lg duration-200 ease-(--my-beizer) hover:scale-105 hover:shadow-2xl/50">
      {/* Background Image */}

      <div className="absolute inset-0 -z-5 rounded-lg">
        <img
          src={demon?.img_url_medium}
          alt=""
          loading="lazy"
          className="h-full w-full overflow-hidden rounded-lg object-cover duration-200 ease-(--my-beizer)"
          style={{
            opacity: 1,
            mixBlendMode: "lighten",
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex w-full flex-row gap-2 rounded-xl p-1">
        <div
          title={`The level has a rating of "${demon.rating} ${demon.difficulty} Demon"`}
          className="flex flex-col items-center justify-center gap-2 text-center drop-shadow-lg/100"
        >
          <img
            title={`The level has a rating of ${demon.rating} ${demon.difficulty} Demon`}
            src={`/difficulties/${demon.rating}${demon.difficulty}-v1.webp`}
            alt={`${demon.rating}${demon.difficulty} Demon Picture`}
            className="h-12 w-15 cursor-help drop-shadow-xl/10"
          />{" "}
          <div
            title={`The level is at position ${demon.position}`}
            className="cursor-help rounded-lg bg-neutral-900/80 px-1"
          >
            <p className="shiny-position-text text-lg font-extrabold drop-shadow-lg/40">
              {demon.position}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-1 rounded-lg bg-gradient-to-r from-neutral-950/90 to-neutral-950/10 p-2 text-xs text-neutral-300">
          <p
            title={`Click to check stats for ${demon.name} by ${demon.creator}`}
            className="cursor-pointer text-lg font-extrabold"
          >
            <b className={`font-bold ${getTextColor(demon.position)}`}>
              {demon.name}
            </b>
          </p>
          <p className="text-blue-200">
            <HammerIcon className="mb-1 inline h-4 w-4" />{" "}
            <b className="font-bold">{demon.creator}</b>
          </p>
          <p className="text-yellow-200">
            <SwordsIcon className="mb-1 inline h-4 w-4" />{" "}
            <b className="font-bold">{demon.player_name}</b>
          </p>
          {extraText}
        </div>
      </div>
    </div>
  );
};

export default DemonContainer;
