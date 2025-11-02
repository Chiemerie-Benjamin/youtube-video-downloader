import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="flex items-center justify-center mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <div className="text-center max-w-3xl">
        {/* Top Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 inline-flex items-center flex-wrap justify-center">
          <span>Free</span>
          <span className="text-white bg-red-700 rounded-full px-3 py-1 ml-2 mt-2 sm:mt-0 inline-block transform -rotate-3 -translate-y-1">
            Youtube
          </span>
        </h1>

        {/* Main Title */}
        <h1 className="font-bold mt-4 text-xl sm:text-3xl lg:text-5xl mb-6 sm:mb-9">
          Video Downloader
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-8">
          With this Platform, You Can Easily Download Any Video
          <br className="hidden sm:block" />
          From Youtube For Free
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            className="text-gray-800 text-sm sm:text-base font-medium hover:text-red-700 transition"
            href=""
          >
            Contact Us
          </a>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 
                       rounded-full font-semibold cursor-pointer
                       bg-red-700 text-white shadow-lg transition-all duration-300 overflow-hidden text-sm sm:text-base"
          >
            <span className="z-10">Learn More</span>
            <span
              className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full z-10
                         transition-all duration-300 group-hover:bg-white/20"
            >
              <i
                className="fa-solid fa-arrow-right text-white transition-all duration-300 
                           group-hover:translate-x-1"
              ></i>
            </span>

            {/* Background transition */}
            <span
              className="absolute inset-0 rounded-full bg-gray-700 
                         opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
