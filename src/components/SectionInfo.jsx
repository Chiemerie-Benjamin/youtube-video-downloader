import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="flex items-center justify-center mt-20 px-4"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // 👈 smooth + small delay
    >
      <div className="text-center">
        {/* Top Title */}
        <h1 className="text-4xl font-light text-gray-600 inline-flex items-center">
          <span>Free</span>
          <span className="text-white bg-red-700 rounded-full pt-1 pb-1 px-3 inline-block transform -rotate-3 -translate-y-1 ml-2">
            Youtube
          </span>
        </h1>

        {/* Main Title */}
        <h1 className="font-bold mt-4 text-2xl md:text-5xl mb-9">
          Video Downloader
        </h1>

        {/* Description */}
        <h1 className="text-gray-700">
          With this Platform, You Can Easily Download Any Video
          <p className="mb-8">From Youtube For Free</p>
        </h1>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6">
          <a
            className="text-gray-800 font-medium hover:text-red-700 transition"
            href=""
          >
            Contact Us
          </a>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="group relative inline-flex items-center gap-3 px-6 py-3 
                       rounded-full font-semibold cursor-pointer
                       bg-red-700 text-white shadow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="z-10">Learn More</span>
            <span
              className="relative flex items-center justify-center w-8 h-8 rounded-full z-10
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
