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

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
      className="mt-5 flex w-full flex-col gap-2 border-t-2 border-neutral-300 pt-5 md:flex-row"
    >
      <div className="flex flex-row">
        <h2 className="main-title text-xl font-bold text-pink-500 md:text-2xl">
          Recent List Changes{" "}
          <ClockPlus className="mb-1 ml-1 inline h-10 w-10 rounded-full bg-blue-500 p-2 text-neutral-50 md:h-12 md:w-12" />
        </h2>
      </div>
    </motion.section>
  );
};

export default Changelog;
