import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex flex-col-reverse justify-center  lg:flex-row  w-full gap-10 lg:gap-0">
      <div className="flex flex-col justify-center w-full relative overflow-hidden ">
        <div className="absolute text-5xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] text-gray-600 opacity-20 tracking-tighter  leading-tight z-0 flex flex-col font-black">
          <div className="flex gap-14">
            <span>I</span>
            <span>BUILD</span>
          </div>
          <span>WEBSITES</span>
        </div>
        <div className="relative lg:left-16 space-y-24 sm:space-y-44 md:space-y-52 lg:space-y-28 z-20">
          <div className="z-10 flex flex-col gap-4">
            <span className="text-2xl md:text-5xl lg:text-7xl tracking-tighter font-bold">
              Daryl R. Sumabal
            </span>
            <TypeAnimation
              sequence={["Web Developer", 1000, "", 500]}
              wrapper="span"
              speed={30}
              className="text-xl md:text-3xl lg:text-[3.75rem] font-light inline-block"
              repeat={Infinity}
            />
          </div>
          <div className="space-x-2 lg:space-x-10 font-sans">
            <button className="p-3 font-medium  lg:text-2xl bg-secondary text-white ease-in duration-100 hover:shadow-lg hover:shadow-secondary/45 hover:scale-105">
              View Work
            </button>
            <button className="border-2 text-white border-secondary p-3 font-medium lg:text-2xl ease-in duration-100 hover:shadow-lg hover:shadow-secondary/45 hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center md:justify-center  lg:absolute lg:right-1 2xl:top-40 2xl:right-44 z-0 lg:top-72 xl:top-40  ">
        <img
          src="daryl.webp"
          alt="Profile.png"
          className="h-[200px] w-[250px] 2xl:h-[500px] 2xl:w-[700px] shadow-lg  shadow-secondary bord  object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
