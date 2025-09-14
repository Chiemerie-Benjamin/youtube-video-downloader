const Hero = () => {
  return (
    <div className="relative h-[80vh] mt-4 mx-4 rounded-2xl overflow-hidden shadow-lg" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      ></div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-around items-center pt-7 pb-7 z-10">
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
      <div className="relative flex flex-col items-center justify-start h-full z-10 pt-24">
        <h1 className="text-4xl font-light text-black">Online Video</h1>
      </div>
    </div>
  );
};

export default Hero;
