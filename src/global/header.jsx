import {
  BoxesIcon,
  ChartBar,
  ClipboardList,
  House,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const text_class =
    "text-sm hover:shadow-lg rounded-lg hover:scale-105 hover:font-bold duration-200 text-center ease(--my-beizer) h-fit p-5 md:p-2 md:text-lg lg:text-xl";
  return (
    <motion.header
      className="header fixed z-50 flex w-full justify-around text-sm font-light text-pink-600 drop-shadow-lg/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.1, 0.8, 0.37, 0.99],
      }}
    >
      <section className="flex w-full">
        <nav className="justify-betwen flex w-full flex-row items-center px-4 md:p-2">
          <div className="items center flex">
            <Link
              to="/"
              className={`self-start text-blue-600 hover:text-blue-900 md:w-60 ${text_class} `}
            >
              <House className="h-8 w-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
              <span className="hidden md:inline">GDPH Demonlist</span>
            </Link>
          </div>

          <ul className="flex w-full flex-row items-center justify-end md:gap-2 lg:gap-5">
            <li className="flex">
              <Link
                to="/demonlist"
                className={`${text_class} hover:text-yellow-500`}
              >
                <ClipboardList className="h-8 w-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Demonlist</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/packs"
                className={`${text_class} hover:text-yellow-500`}
              >
                <BoxesIcon className="h-8 w-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Packs</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/stats"
                className={`${text_class} hover:text-yellow-500`}
              >
                <ChartBar className="h-8 w-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Statistics</span>
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/player"
                className={`${text_class} hover:text-yellow-500`}
              >
                <UserCircle2 className="h-8 w-8 md:mr-2 md:mb-1 md:inline md:h-5 md:w-5" />
                <span className="hidden md:inline">Players</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </motion.header>
  );
}
