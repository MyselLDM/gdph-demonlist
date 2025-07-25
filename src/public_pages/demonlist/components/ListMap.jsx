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

  const newData = Array.from(
    { length: list_type.max - list_type.min + 1 },
    (_, i) => data[list_type.min - 1 + i], // adjust for 0-based indexing
  );

  console.log(newData);

  return (
    <div>
      <h2 className={`text-2xl font-bold text-${getThemeColor()}-500`}>
        {list_type.name} List
      </h2>
      <h3 className="text-lg font-light text-neutral-500">
        {list_type.decription}
      </h3>
      <div className="flex flex-col gap-5">
        {newData.map((demon, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-5 rounded-2xl p-1 shadow-lg"
            style={{
              backgroundImage: `linear-gradient(to right, ${demon.color_1}, ${demon.color_2})`,
            }}
          >
            <div className="flex w-full flex-row gap-5 rounded-xl bg-neutral-50">
              <div>
                <img
                  src={getYouTubeThumbnail(demon.url)}
                  onError={(e) => {
                    e.currentTarget.onerror = null; // prevent infinite loop
                    e.currentTarget.src = "/no-thumbnail-image.webp";
                  }}
                  alt=""
                  className="aspect-auto h-50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold">{demon.name}</p>
                <p className="text-sm font-light text-neutral-500">
                  {demon.points} points
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
