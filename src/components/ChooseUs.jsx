import React from "react";
import { motion } from "framer-motion";
import { Zap, Download, Infinity, Monitor } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-black" />,
    title: "High Quality",
    description:
      "You can download all the videos in the YouTube library without losing quality and in a short time. All videos can be downloaded in Mp4 and even Mp3 formats.",
  },
  {
    icon: <Download className="w-6 h-6 text-black" />,
    title: "Fast Downloading",
    description:
      "Using our downloader, quickly download your desired videos from YouTube with just a few simple clicks without wasting any time or paying extra fees.",
  },
  {
    icon: <Infinity className="w-6 h-6 text-black" />,
    title: "Unlimited Download",
    description:
      "Through this platform, you can download the videos you want at any time and without limiting the number of downloads. Transfer speed is up to 1GB/s.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-black" />,
    title: "Support All Devices",
    description:
      "Our downloader is a web-based tool and online platform that you can use on any operating system, including Windows, Linux, iPhone, and Android.",
  },
];

const ChooseUs = () => {
  return (
    <div
      className="py-16 px-6 bg-white text-center"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center gap-2 mb-12"
      >
        <h1 className="text-4xl text-gray-600 font-light">Why To Choose</h1>
        <h1 className="text-5xl text-red-700 font-bold">
          VideoMax <span className="text-black font-bold">Downloader</span>
        </h1>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-black">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
