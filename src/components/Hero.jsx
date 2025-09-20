import { motion } from "framer-motion";
import Use from "./Use";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 },
  }),
};

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] mt-2 mx-2 
       sm:mx-4 rounded-[20px] sm:rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-lg"
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
     {/* Navbar Content */}
<div className="relative flex justify-between sm:justify-around items-center pt-3 sm:pt-5 pb-3 sm:pb-5 z-10 px-3 sm:px-6 lg:px-8">
  <div className="flex items-center">
    {/* Bigger logo only */}
    <img
      src="/images/redplay.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-40  lg:h-16 object-contain cursor-pointer"
    />
  </div>

  <div className="flex gap-2 sm:gap-4 items-center">
    <img className="w-5 sm:w-6" src="./images/america.png" alt="" />
    <h1 className="text-xs sm:text-sm lg:text-base font-semibold flex items-center gap-1">
      English <i className="fa-solid fa-chevron-down"></i>
    </h1>
  </div>
</div>


      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start h-full z-10 pt-12 sm:pt-16">
        {/* Zigzag image */}
        <motion.img
          src="./images/zig.png"
          alt=""
          className="w-12 sm:w-16 mb-1"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={0}
        />

        {/* Titles */}
        <motion.h1
          className="text-xl sm:text-3xl lg:text-4xl font-light text-black leading-tight mb-1 text-center"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Online Video
        </motion.h1>
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-none text-center"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Downloader
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 mt-3 text-center text-xs sm:text-sm lg:text-base px-3 sm:px-6"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={3}
        >
          Video Max is a simple yet powerful tool for downloading YouTube videos
          seamlessly.
        </motion.p>
        <motion.p
          className="text-gray-600 text-[10px] sm:text-xs lg:text-sm mb-6 sm:mb-10 lg:mb-20 text-center px-3 sm:px-6"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={4}
        >
          It lets you save your favorite content in just a few clicks, fast and
          hassle-free.
        </motion.p>

    {/* Input + Button Wrapper */}
<motion.div
  className="w-[90%] sm:w-[85%] lg:w-full max-w-2xl bg-white rounded-full h-14 sm:h-16 lg:h-20 flex items-center px-2 sm:px-4 shadow-lg"
  variants={textVariant}
  initial="hidden"
  animate="show"
  custom={5}
>
  {/* Left side: input with icon */}
  <div className="flex items-center flex-1 h-full px-2 sm:px-4">
    <img
      className="w-4 sm:w-5 lg:w-6"
      src="./images/link.png"
      alt=""
    />
    <input
      type="text"
      placeholder="Insert Youtube Link Here..."
      className="flex-1 px-2 sm:px-4 text-xs sm:text-sm lg:text-lg bg-transparent focus:outline-none"
    />
  </div>

  {/* Right side: button */}
  <motion.button
    className="bg-red-700 cursor-pointer text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap"
    whileHover={{
      scale: 1.05,
      backgroundColor: "#b91c1c",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 10,
    }}
  >
    Download
  </motion.button>
</motion.div>


        {/* Supported platform */}
        {/* <motion.div
          className="bg-gray-800 w-[90%] sm:w-[20%] lg:w-[25%] max-w-xl h-8 sm:h-3 lg:h-14 
           flex items-center justify-between rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl mb-5"
          variants={textVariant}
          initial="hidden"
          animate="show"
          custom={6}
        >
          <h1 className="text-white text-[10px] sm:text-xs lg:text-base ml-3  sm:ml-4 lg:ml-8">
            Supported platform:
          </h1>
          <i className="fa-brands fa-youtube text-white text-base sm:text-lg lg:text-xl mr-3 sm:mr-4 lg:mr-8"></i>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
