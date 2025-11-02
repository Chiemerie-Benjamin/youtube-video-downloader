import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    text: "With This Platform, You Can Easily Download Any Video From YouTube For Free",
  },
  {
    id: "02",
    text: "With This Platform, You Can Easily Download Any Video From YouTube For Free",
  },
  {
    id: "03",
    text: "With This Platform, You Can Easily Download Any Video From YouTube For Free",
  },
];

const Card = () => {
  return (
    <section className="w-full flex items-center justify-center py-10 sm:py-16 px-4">
      <div className="flex flex-col sm:flex-row">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative bg-[#1f1f1f] text-white p-6 sm:p-10 flex flex-col items-center justify-center text-center w-full sm:w-72 md:w-80 lg:w-96 
              ${index === 0 ? "rounded-l-2xl" : ""}
              ${index === cards.length - 1 ? "rounded-r-2xl" : ""}
              ${index !== 0 ? "sm:border-l sm:border-dashed sm:border-gray-500" : ""}
            `}
          >
            {/* Cutouts only between cards */}
            {index !== 0 && (
              <>
                {/* Top hole */}
                <span className="absolute -top-3 left-0 -translate-x-1/2 w-6 h-6 bg-white rounded-full"></span>
                {/* Bottom hole */}
                <span className="absolute -bottom-3 left-0 -translate-x-1/2 w-6 h-6 bg-white rounded-full"></span>
              </>
            )}

            {/* Content */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4">
              {card.id}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
