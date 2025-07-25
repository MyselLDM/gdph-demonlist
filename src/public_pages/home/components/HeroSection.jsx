import { motion } from "framer-motion";
import "./style.css";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.1, 0.8, 0.37, 0.99] }}
      className="hero flex w-full flex-col text-center"
    >
      <div className="title flex h-fit flex-col items-center gap-2">
        <motion.img
          src="https://i.ibb.co/ynvMYpw6/logo.png"
          alt=""
          className="h-40 w-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.1, 0.8, 0.37, 0.99] }}
        />
        <h1 className="main-title shiny-text text-3xl font-bold md:text-4xl">
          Geometry Dash Philippines Demonlist
        </h1>
        <h2 className="sub-title text-xl font-light text-neutral-500">
          Where the best players from this country show off their skills!
        </h2>
      </div>
    </motion.section>
  );
};

export default HeroSection;
