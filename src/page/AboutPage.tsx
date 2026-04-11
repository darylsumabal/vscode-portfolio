import Image from '../components/image/Image'

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
              As a Web Developer, I possess an impressive arsenal of skills I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. I am also a team player who thrives in
              collaborating with cross-functional teams to produce outstanding
              web applications.
            </p>
          </div>
</div>        

      <div className="flex items-center justify-center w-full">
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
  )
}

export default AboutPage
