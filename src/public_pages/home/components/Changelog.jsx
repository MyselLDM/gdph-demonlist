import { ClockPlus } from "lucide-react";
import supabase from "../../../supabase";
import { useQuery } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";
import getchangelog from "./queries/getchangelog";
import { useRef } from "react";

const Changelog = () => {
  const { data } = useQuery({
    queryKey: ["changelog"],
    queryFn: getchangelog,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px", // triggers earlier/later
  });

  const updateType = (type) => {
    switch (type) {
      case "ADDED":
        return "added at";
      case "REMOVED":
        return "Removed";
      default:
        return "updated to";
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        duration: 2,
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
      className="mt-5 flex w-full flex-col gap-2 border-t-2 border-neutral-300 pt-5"
    >
      <div className="flex flex-col">
        <h2 className="main-title text-xl font-bold text-pink-500 md:text-2xl">
          <ClockPlus className="mb-1 ml-1 inline h-10 w-10 rounded-full bg-pink-500 p-2 text-neutral-50 md:h-12 md:w-12" />{" "}
          Recent List Changes
        </h2>
        <p className="sub-title text-xl font-light text-neutral-500">
          See the recent levels that had recent changes in the demonlist!
        </p>
      </div>
      <div className="flex flex-col gap-5 rounded-xl bg-pink-100 p-5 shadow-lg/20 shadow-pink-500">
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col rounded-xl bg-pink-50 text-pink-900 shadow-lg md:text-lg`}
            >
              <div className="rounded-tl-xl rounded-tr-xl bg-pink-500 p-1 font-extrabold text-white">
                <p>{new Date(item.date).toDateString()}</p>
              </div>
              <div className="p-2">
                {" "}
                <p className="font-medium">
                  <b className="text-extrabold">{item.level}</b> has been{" "}
                  {updateType(item.type)}{" "}
                  <b className="text-extrabold">{item.placement}</b>, above{" "}
                  <b className="text-extrabold">{item.level_below}</b> and below{" "}
                  <b className="text-extrabold">{item.level_above}</b>. Pushing{" "}
                  <b className="text-extrabold">{item.level_extended}</b> to the
                  extended list and{" "}
                  <b className="text-extrabold">{item.level_legacy}</b> to the
                  legacy list.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Changelog;
