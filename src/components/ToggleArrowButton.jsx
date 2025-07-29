import { ChevronDown } from "lucide-react";

const ToggleArrowButton = ({ onClick, color, state }) => {
  return (
    <button
      className="aspect-square size-10 cursor-pointer rounded-lg border-2 border-neutral-600/0 p-2 duration-200 hover:scale-110 hover:border-neutral-600 hover:bg-neutral-800"
      onClick={onClick}
    >
      <ChevronDown
        className={`h-full w-full transform duration-300 ease-(--my-beizer) ${state ? "rotate-0" : "rotate-180"}`}
      />
    </button>
  );
};

export default ToggleArrowButton;
