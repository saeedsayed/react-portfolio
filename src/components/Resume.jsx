import React, { useState } from "react";
import resumeImage from "../assets/images/saeed-cv.jpg";
import SectionTitle from "./SectionTitle";
import MainBtn from "./MainBtn";
import resumeAnimation from "../assets/animation/resume.json";
import Lottie from "lottie-react";
import resumePdf from "../assets/documents/saeed-cv.pdf";
import { FaGoogleDrive } from "react-icons/fa6";

const Resume = () => {
  const [downPdfNote, setDownPdfNote] = useState(false);
  const [downImgNote, setDownImgNote] = useState(false);
  return (
    <div id="resume">
      <SectionTitle>My resume</SectionTitle>
      <div className="flex flex-col gap-10 items-center md:flex-row">
        <div className="w-full order-2 flex flex-col gap-8 md:order-1">
          <Lottie animationData={resumeAnimation} className="md:order-4" />
          <p className="text-font-sub-color md:order-">
            I am a front-end developer with a background in web development. I
            have a passion for learning new technologies, and I am always
            looking to improve my skills.
          </p>
          {/* ===========
            download resume PDF button  👇
          =============== */}
          <a
            href={resumePdf}
            download="saeed-cv"
            className="text-sm md:text-md lg:text-lg md:order-"
            onClick={() => setDownPdfNote(true)}
          >
            <MainBtn>
              download Resume as PDF ( Recommended )
            </MainBtn>
          </a>
          {/* ======= download note 👇 ======= */}
          {downPdfNote && (
            <p className="border-dashed border p-2 rounded-lg text-sm md:text-md">
              if the download doesn't start within a minute, you can download it
              directly from{" "}
              <a
                href="https://drive.google.com/file/d/1N6VsHoWwgnD_pFF3hzAcdCz3KzzjrBSM/view?usp=sharing"
                target="_blank"
                className="text-blue-600 underline"
              >
                google drive <FaGoogleDrive className="inline" />
              </a>
            </p>
          )}
          {/* ===========
            download resume image button  👇
          =============== */}
          <a
            href={resumeImage}
            download="saeed-cv"
            className="text-sm md:text-md lg:text-lg md:order-"
            onClick={() => setDownImgNote(true)}
          >
            <MainBtn >
              download Resume as Image/JPG
            </MainBtn>
          </a>
          {/* ======= download note 👇 ======= */}
          {downImgNote && (
            <p className="border-dashed border p-2 rounded-lg text-sm md:text-md">
              if the download doesn't start within a minute, you can download it
              directly from{" "}
              <a
                href="https://drive.google.com/file/d/1cZRIHVAB4BqsvhIf4VbRawIM7sTR1q8W/view?usp=sharing"
                target="_blank"
                className="text-blue-600 underline"
              >
                google drive <FaGoogleDrive className="inline" />
              </a>
            </p>
          )}
        </div>
        {/* ==========
          resume image  👇
        ============== */}
        <img
          src={resumeImage}
          alt=""
          className="w-full md:w-1/2 order-1 md:order-2 dark:invert outline outline-offset-4 outline-hover-color rounded-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
