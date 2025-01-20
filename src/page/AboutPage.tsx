import Image from "../components/image/Image";

const AboutPage = () => {
  return (
    <div className="flex gap-y-4 flex-col justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-12 lg:gap-48 items-center py-4 w-full">
        <div className="flex gap-4 w-full flex-col lg:w-1/2">
          <h1 className="text-3xl text-start font-extrabold ">Web Developer</h1>
          <h2 className="text-xl w-11/12">
            Hi, I'm Daryl R. Sumabal. A passionate Web Developer <br /> base in
            Philippines.
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Image
            loading="lazy"
            path="portfolio/daryl.webp"
            alt="Profile.png"
            width={96}
            height={96}
            lqip={{ active: true, quality: 10 }}
            className="h-[200px] w-[250px] md:h-72 md:w-80 2xl:h-[500px] 2xl:w-[700px] shadow-lg  shadow-secondary rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row  lg:items-start gap-4">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold">Quotes:</h2>
          <p className="leading-7">
            Control your mind and you will control your destiny.
          </p>
          <p>
            You don't need to become the best of the best you only need is to be
            part of it.
          </p>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold">About Me:</h2>
          <p className="leading-7">
            As a Web Developer, I possess the power to rule our entire clan and
            make them realize that, I am the almighty one, also I am a
            cold-hearted person and selfish type of person that will do
            everything in order to achieve the goal or dream even if it causes
            death, I'am also hunger and greedy of wisdom of others that i can
            able to apply it on myself and make it much better, by using my
            strong intimadating aura i can able to conquer anything. I can also
            able to calculate the possible outcomes and alternate future, not
            the most accurate but almost close enough to control the situation
            or to prevent so, I would not be dissapointed in life or sad, by my
            strong determination to succeed because of this biggest dream that,
            I will do everything that, I can able to exchange my happinness in
            life just to achieve that biggest dream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
