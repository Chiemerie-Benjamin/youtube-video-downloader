import React from "react";

const Section = () => {
  return (
    <div
      className="flex items-center justify-center mt-20"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-600 inline-flex items-center">
          <span>Free</span>
          <span className="text-white bg-red-500 rounded-full pt-1 pb-1 pr-3 pl-3 inline-block transform -rotate-3 -translate-y-1 ml-2">
            Youtube
          </span>
        </h1>
        <h1 className="font-bold mt-4 text-2xl md:text-5xl mb-9">
          Video Downloader
        </h1>

        <h1 className="text-gray-700">
          With this Platform, You Can Easily Download Any Video
          <p className="mb-8">From Youtube For Free</p>
        </h1>

        <div className="flex items-center justify-center">
          <a className="mr-10" href="">
            Contact Us
          </a>
          <button
            className="bg-black cursor-pointer shadow-2xl text-white ml-4 pt-4 pb-4 pr-6 pl-6 
             rounded-full
          "
          >
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
