import { MdVerified } from "react-icons/md";
import frontTech from "../assets/animation/front-tech.json";
import thumbnails from "../assets/images/main-img.jpg";
import SocialNav from "./SocialNav";
import Lottie from "lottie-react";

const Hero = () => (
  <div id="about" className="flex flex-col md:flex-row items-center">
    {/* =======
        left section 👇
        =========== */}
    <div className="flex flex-col md:text-start text-center gap-6 md:w-3/5">
      <div className="flex gap-4 justify-center md:justify-start items-end">
        <div
          className="img w-52 h-52 bg-cover animate-morph bg-transparent outline outline-offset-4 outline-[var(--hover-color)] "
          style={{ backgroundImage: `url(${thumbnails})` }}
        />
        <div className="vf-bg">
          <MdVerified className="text-hover-color text-2xl" />
        </div>
      </div>
      <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold leading-tight">
        I'm Eng Saeed <br /> Front-End Developer <br /> and Web Designer.
      </h1>
      <p className="text-font-sub-color">
        Hi, I'm Saeed, a passionate 23-year-old front-end developer with 2 years
        of hands-on experience. I specialize in crafting interactive and
        user-friendly web applications using the ReactJS framework.
         
        {/* Front-End Developer with a proven ability to collaborate effectively with senior
        developers while spending extra time to be mentored. Enjoy working
        closely with team members to ensure workloads are effectively redirected
        to bottlenecks and personally picking up the slack when necessary. With
        a passion for both personal growth and for software development, I
        attended a 1000+ hour coding bootcamp to learn new languages while
        sharpening existing skills. Ready to apply my passion for coding to a
        talented engineering team to develop quality solutions */}
      </p>
      {/* ===========
        social media links 👇
        =============== */}
      <SocialNav />
    </div>
    {/* ========
        right section 👇
        ============ */}
    <div className="flex-1">
      <Lottie animationData={frontTech} />
    </div>
  </div>
);

export default Hero;
