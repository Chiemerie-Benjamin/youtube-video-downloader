import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
    >
      <img
        className="max-w-full h-auto object-contain"
        src="/images/cards.png"
        alt="cards"
      />
    </motion.div>
  );
};

export default Card;
