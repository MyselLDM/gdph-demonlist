import { ClipboardListIcon, HammerIcon, SwordsIcon } from "lucide-react";
import { getThemeColor, getTextColor } from "./helper";

const ListMap = ({ data, list_type }) => {
  // Splits the levels into different parts
  const newData = Array.from(
    { length: list_type.max - list_type.min + 1 },
    (_, i) => data[list_type.min - 1 + i],
  );

  console.log(newData);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col flex-wrap">
        <h2 className={`text-2xl font-bold ${getTextColor(list_type.name)}`}>
          <ClipboardListIcon
            className={`mb-1 inline h-12 w-12 rounded-full p-2 text-white bg-${getThemeColor(list_type.name)}-500 mr-2`}
          />
          {"  "}
          {list_type.name} List
        </h2>
        <h3 className="text-lg font-light text-neutral-500">
          {list_type.decription}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newData.map((demon, index) => (
          <div
            key={index}
            className="relative flex h-full w-full flex-grow items-center gap-5 rounded-lg duration-200 ease-(--my-beizer) hover:scale-105 hover:shadow-2xl/50"
          >
            {/* Background Image */}

            <div className="absolute inset-0 -z-5 overflow-hidden rounded-lg">
              <img
                src={demon?.img_url_medium}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover duration-200 ease-(--my-beizer)"
                style={{
                  opacity: 1,
                  mixBlendMode: "lighten",
                }}
              />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex w-full flex-row gap-2 rounded-xl p-1">
              <div
                title={`${demon.rating} ${demon.difficulty} Demon`}
                className="flex flex-col items-center justify-center text-center drop-shadow-lg/100"
              >
                <img
                  src={`/difficulties/${demon.rating}${demon.difficulty}-v1.webp`}
                  alt=""
                  className="h-12 w-15 cursor-help drop-shadow-xl/10"
                />{" "}
                <p className="shiny-position-text text-lg font-extrabold drop-shadow-lg/40">
                  {demon.position}
                </p>
              </div>

              <div className="flex w-full flex-col gap-1 rounded-lg bg-gradient-to-r from-neutral-950/90 to-neutral-950/10 p-2 text-xs text-neutral-300">
                <p className="text-lg font-extrabold">
                  <b className={`font-bold ${getTextColor(list_type.name)}`}>
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
                <p className="font-light text-gray-300">
                  {demon.points != 0
                    ? `${demon.points.toLocaleString()} points`
                    : ""}{" "}
                  <b className="text-gray-400 italic">
                    {demon.list_percent !== 100
                      ? `(${demon.list_percent}% to qualify)`
                      : ""}
                  </b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMap;
