import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Find Video",
    desc: "Find the video you want from among the videos available on YouTube and copy its link.",
    active: false,
  },
  {
    id: "02",
    title: "Paste Video",
    desc: "Paste the copied link in the desired box and then wait for the system to display the desired video download links in different formats and sizes.",
    active: true,
  },
  {
    id: "03",
    title: "Download Video",
    desc: "And in the last step, click on download from the displayed list and save the desired video on your device.",
    active: false,
  },
];

const Use = () => {
  return (
    <section
      className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="./images/woman1.png"
            alt="User with phone"
            className="w-full max-w-sm sm:max-w-md lg:max-w-md h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Steps */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            variants={{
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mb-3">
              How to use
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12">
              <span className="text-red-700">Youtube </span>
              <span className="text-black font-bold">Downloader</span>
            </h3>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                variants={{ show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                              flex items-center justify-center 
                              rounded-full border-2 font-bold 
                              text-sm sm:text-base lg:text-lg
                              ${
                                step.active
                                  ? "bg-red-600 text-white border-red-600 pt-6 pb-6 pl-5 pr-5 text-center"
                                  : "bg-white text-red-600 border-red-600 pt-6 pb-6 pl-5 pr-5 text-center"
                              }`}
                >
                  {step.id}
                </motion.div>

                {/* Text */}
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-light">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Use;
