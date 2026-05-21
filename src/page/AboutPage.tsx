import Image from "../components/image/Image";

const AboutPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-y-4">
      <div className="flex flex-col gap-4  w-fit">
        <div className="flex gap-4 flex-col">
          <h1 className="text-3xl text-start font-extrabold ">Web Developer</h1>
          <h2 className="text-xl w-11/12">
            Hi, I'm Daryl R. Sumabal. A passionate Web Developer <br /> base in
            Philippines.
          </h2>
          <div>
            <h2 className="text-2xl font-semibold">About Me:</h2>
            <p className="leading-7">
              I’m a problem-solving web developer who enjoys turning ideas into
              functional and meaningful digital experiences. I focus on building
              systems that are not only usable but also efficient and
              well-structured. I approach challenges with curiosity and
              persistence, and I value collaboration as a way to create better
              solutions.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Image
          loading="lazy"
          path="portfolio/home_image.png"
          alt="Profile.png"
          width={96}
          height={96}
          lqip={{ active: true, quality: 10 }}
          className="h-[200px] w-[250px] md:h-72 md:w-80 2xl:h-[500px] 2xl:w-[700px] shadow-lg  shadow-secondary rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPage;
