import { MdVerified } from "react-icons/md";
import frontTech from "../assets/animation/front-tech.json";
import SocialNav from "./SocialNav";
import Lottie from "lottie-react";
import { useMainContext } from "../context/MainContext";

const Hero = () => {
  const { aboutData, loadings } = useMainContext();
  if (loadings)
    return (
      <div className="flex items-center justify-center h-96">
        <div className="loader" />
      </div>
    );
  return (
    <div id="about" className="flex flex-col md:flex-row items-center">
      {/* =======
        left section 👇
        =========== */}
      <div className="flex flex-col md:text-start text-center gap-6 md:w-3/5">
        <div className="flex gap-4 justify-center md:justify-start items-end">
          <div
            className="w-52 h-52 bg-cover animate-morph bg-transparent outline outline-offset-4 outline-[var(--hover-color)] "
            style={{ backgroundImage: `url(${aboutData?.avatar})` }}
          />
          <div className="vf-bg">
            <MdVerified className="text-hover-color text-2xl" />
          </div>
        </div>
        <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold leading-tight">
          {aboutData?.bigTitle}
        </h1>
        <p className="text-font-sub-color">{aboutData?.summary}</p>
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
};

export default Hero;
