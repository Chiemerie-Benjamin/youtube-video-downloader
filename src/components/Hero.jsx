const Hero = () => {
  return (
    <div
      className="relative h-[80vh] mt-2 mx-2 md:mx-4 rounded-[30px] md:rounded-[60px] overflow-hidden shadow-lg"
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
      <div className="relative flex justify-between md:justify-around items-center pt-3 md:pt-5 pb-3 md:pb-5 z-10 px-4 md:px-0">
        <div className="flex gap-2">
          <img src="/images/video-camera.png" alt="" className="w-6 md:w-auto" />
          <h1 className="text-lg md:text-xl font-bold text-black">
            Video <span className="font-light text-black">Max</span>
          </h1>
        </div>

        <div className="flex gap-2 md:gap-4">
          <img className="w-5 md:w-6" src="./images/america.png" alt="" />
          <h1 className="text-sm md:text-base font-semibold">
            English <i className="fa-solid fa-chevron-down"></i>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start h-full z-10 pt-16">
        {/* Zigzag image closer to text */}
        <img className="w-16 mb-1" src="./images/zig.png" alt="" />

        {/* Titles closer together */}
        <h1 className="text-2xl md:text-4xl font-light text-black leading-tight mb-1 text-center">
          Online Video
        </h1>
        <h1 className="text-4xl md:text-7xl font-bold leading-none text-center">Downloader</h1>

        {/* Description */}
        <p className="text-gray-600 mt-3 text-center text-sm md:text-base px-4 md:px-0">
          Video Max is a simple yet powerful tool for downloading YouTube videos
          seamlessly.
        </p>
        <p className="text-gray-600 text-xs md:text-sm mb-10 md:mb-20 text-center px-4 md:px-0">
          It lets you save your favorite content in just a few clicks, fast and
          hassle-free.
        </p>

        {/* Input + Button Wrapper */}
        <div className="w-full max-w-2xl bg-white rounded-full h-16 md:h-24 flex items-center px-2 md:px-4 shadow-lg mx-4 md:mx-0">
          <div className="flex-1 bg-gray-200 h-12 md:h-16 rounded-full flex items-center px-2 md:px-4 flex-wrap md:flex-nowrap gap-2 md:gap-0">
            <img className="w-4 md:w-6" src="./images/link.png" alt="" />
            <input
              type="text"
              placeholder="Insert Youtube Link Here..."
              className="flex-1 px-2 md:px-5 py-2 md:py-5 rounded-l-full focus:outline-none border-none bg-transparent text-sm md:text-lg min-w-0"
              style={{ textAlign: "left" }}
            />
            <button className="bg-red-800 cursor-pointer text-white px-4 md:px-8 py-2 md:py-3 rounded-full hover:bg-red-700 transition text-sm md:text-lg whitespace-nowrap">
              Download
            </button>
          </div>
        </div>
      <div className="bg-gray-800 w-[80%] md:w-[25%] max-w-2xl h-10 md:h-14 flex items-center justify-between rounded-b-2xl md:rounded-b-3xl">
  <h1 className="text-white text-xs md:text-base ml-4 md:ml-8">Supported platform:</h1>
  <i className="fa-brands fa-youtube text-white text-lg md:text-xl mr-4 md:mr-8"></i>
</div>
      </div>
    </div>
  );
};

export default Hero;
