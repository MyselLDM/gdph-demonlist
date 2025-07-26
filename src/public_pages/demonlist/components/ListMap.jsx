import { ClipboardListIcon } from "lucide-react";
import { getYouTubeThumbnail } from "./helper";

const ListMap = ({ data, list_type }) => {
  const getThemeColor = () => {
    switch (list_type.name) {
      case "Main":
        return "pink";
      case "Legacy":
        return "blue";
    }
  };

  // Splits the levels into different parts
  const newData = Array.from(
    { length: list_type.max - list_type.min + 1 },
    (_, i) => data[list_type.min - 1 + i],
  );

  console.log(newData);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col flex-wrap">
        <h2 className={`text-2xl font-bold text-${getThemeColor()}-500`}>
          <ClipboardListIcon
            className={`mb-1 inline h-12 w-12 rounded-full p-2 text-white bg-${getThemeColor()}-500 mr-2`}
          />
          {"  "}
          {list_type.name} List
        </h2>
        <h3 className="text-lg font-light text-neutral-500">
          {list_type.decription}
        </h3>
      </div>
      <div className="flex flex-col flex-wrap gap-5">
        {newData.map((demon, index) => (
          <div
            key={index}
            className="relative flex w-full flex-grow items-center gap-5 rounded-xl p-1 shadow-xl/50 duration-200 ease-(--my-beizer) hover:scale-105 hover:shadow-2xl/50"
          >
            {/* Background Image */}

            <img
              src={demon.img_url}
              alt=""
              className="absolute inset-0 -z-5 h-full w-full rounded-xl object-cover duration-200 ease-(--my-beizer)"
              style={{
                filter: "contrast(80%)",
                opacity: 1,
                mixBlendMode: "lighten",
              }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex w-full flex-row gap-5 rounded-xl bg-gradient-to-r from-neutral-900/100 to-neutral-900/20 p-1">
              <div className="mx-5 flex flex-col items-center justify-center text-center">
                <img
                  src={`/difficulties/${demon.rating}${demon.difficulty}-v1.webp`}
                  alt=""
                  className="h-20"
                />
                <p className="text-2xl font-bold text-yellow-500">
                  {demon.position}
                </p>
              </div>

              <div className="flex w-fit items-center justify-center">
                <a href={`${demon.url}`} target="_blank">
                  <img
                    src={getYouTubeThumbnail(demon.url)}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/no-thumbnail-image.webp";
                    }}
                    alt=""
                    className="aspect-video h-25 w-auto"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-1 text-neutral-400">
                <p className="text-xl font-extrabold">
                  <b className={`text-blue-200`}>{demon.name}</b>
                </p>
                <p className="text-sm">
                  Uploaded By{" "}
                  <b className="font-bold text-blue-200">{demon.creator}</b>
                </p>
                <p className="text-sm font-light text-neutral-300">
                  First beaten by{" "}
                  <b className="font-bold text-yellow-200">
                    {demon.player_name}
                  </b>
                </p>
                <p className="text-sm font-light">
                  {demon.points.toLocaleString()} points{" "}
                  <b className="text-neutral-500 italic">
                    {demon.list_percent
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
