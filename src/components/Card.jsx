import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="w-full flex items-center justify-center overflow-hidden py-10 sm:py-16 px-4"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
    >
      <img
        className="w-full max-w-md sm:max-w-lg lg:max-w-5xl h-auto object-contain"
        src="/images/cards.png"
        alt="cards"
      />
    </motion.div>
  );
};

export default Card;
