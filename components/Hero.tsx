import Link from "next/link.js";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import ShimmerButton from "./ui/ShimmerButton";
import Image from "next/image";
import image1 from "../public/favicon.ico"
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen  w-full dark:bg-black-100  bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest tex-xs text-center text-blue-100 max-w-80 flex items-center justify-center gap-3">
          <span> Eng Hisham Rehab</span>
          <Image src={image1} alt="logo" width={100} height={100}/>
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl ">
       A Software Engineer and Front End Developer specializing in React and Next.js, focused on creating dynamic web applications. With expertise in JavaScript, HTML, and CSS, I design smooth user experiences. I thrive in team settings, delivering high-quality projects on schedule and contributing effectively through code reviews and agile methodologies.</p>
          <Link href="/about">
            <ShimmerButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
