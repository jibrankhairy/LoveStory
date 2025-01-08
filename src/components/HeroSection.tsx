import { motion } from "framer-motion";
import BgWedding from "../assets/backgroundwedding.webp";
const HeroSection = () => {
  return (
    <section id="home">
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${BgWedding})`,
        }}
      >
        {/* Overlay semi-transparan */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Container untuk teks */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          {/* Garis dan teks "Wedding Planner" */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="w-8 sm:w-16 h-px bg-white relative -top-4 sm:-top-6" />
            <span className="text-white text-sm sm:text-lg lg:text-xl uppercase font-serif relative -top-4 sm:-top-6">
              Wedding Planner
            </span>
            <div className="w-8 sm:w-16 h-px bg-white relative -top-4 sm:-top-6" />
          </motion.div>

          {/* Teks utama */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-7xl tracking-wide text-white font-serif"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Your Dream Wedding
            <br />
            Made Perfect
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
