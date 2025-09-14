const Hero = () => {
  return (
    <div
      className="relative h-[80vh] mt-2 mx-4 rounded-2xl overflow-hidden shadow-lg"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      ></div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-around items-center pt-5 pb-5 z-10">
        <div className="flex gap-2">
          <img src="/images/video-camera.png" alt="" />
          <h1 className="text-xl font-bold text-black">
            Video <span className="font-light text-black">Max</span>
          </h1>
        </div>

        <div className="flex gap-4">
          <img className="w-6" src="./images/america.png" alt="" />
          <h1 className="font-semibold">
            English <i className="fa-solid fa-chevron-down"></i>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start h-full z-10 pt-16">
        {/* Zigzag image closer to text */}
        <img className="w-16 mb-1" src="./images/zig.png" alt="" />

        {/* Titles closer together */}
        <h1 className="text-4xl font-light text-black leading-tight mb-1">
          Online Video
        </h1>
        <h1 className="text-7xl font-bold leading-none">Downloader</h1>

        {/* Description */}
        <p className="text-gray-600 mt-3">
          Video Max is a simple yet powerful tool for downloading YouTube videos
          seamlessly.
        </p>
        <p className="text-gray-600 text-sm">
          It lets you save your favorite content in just a few clicks, fast and
          hassle-free.
        </p>
         
         <div className="w-full max-w-xl bg-gray-200 pt-5
          rounded-full flex items-center p-2 mt-6">
  <input
    type="text"
    placeholder="Insert Youtube Link Here..."
    className="flex-1 bg-gray-200 px-3 py-2 rounded-l-2xl focus:outline-none border-none"
  />
  <button className="bg-red-800 pt-4 pb-4 
   text-white px-6 py-2 rounded-full hover:bg-red-600 transition">
    Download
  </button>
</div> 

      </div>
    </div>
  );
};

export default Hero;
