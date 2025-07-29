import { ClipboardListIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DemonContainer from "../../../components/DemonContainer";
import getPointsText from "./PointsText";
import { useState } from "react";
import ToggleArrowButton from "../../../components/ToggleArrowButton";
import { getTextColor, getThemeBgColor } from "../../style_helper";

const ListMap = ({ data, list_type }) => {
  const [isHidden, setIsHidden] = useState(false);
  // Splits the levels into different parts
  const newData = Array.from(
    { length: list_type.max - list_type.min + 1 },
    (_, i) => data[list_type.min - 1 + i],
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col flex-wrap">
        <div className="flex flex-row items-center justify-between">
          <h2 className={`text-2xl font-bold ${getTextColor(list_type.name)}`}>
            <ClipboardListIcon
              className={`mb-1 inline h-12 w-12 rounded-full p-2 text-white ${getThemeBgColor(list_type.name)} mr-2`}
            />
            {"  "}
            {list_type.name} List
          </h2>
          <ToggleArrowButton
            onClick={() => setIsHidden(!isHidden)}
            color={`neutral`}
            state={isHidden}
          />
        </div>
        <h3 className="text-lg font-light text-neutral-400">
          {list_type.decription}
        </h3>
      </div>

      <div
        className={`my-5 grid max-h-0 grid-cols-1 gap-5 transition-[max-height,opacity] duration-100 ease-[var(--my-beizer)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${!isHidden ? "max-h-full opacity-100" : "opacity-0"}`}
      >
        {newData.map((demon, index) => (
          <DemonContainer
            key={index}
            demon={demon}
            extraText={getPointsText(demon.points, demon.list_percent)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListMap;
