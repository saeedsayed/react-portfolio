import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "./index";
import { motion } from "framer-motion";
import { useMainContext } from "../context/MainContext";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
    },
  }),
};

const Skills = () => {
  const { skillsData, loading } = useMainContext();
  if (loading) return <div className="min-h-96 flex justify-center items-center"><div className="loader" /></div>
  return (
    <div id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex gap-1 gap-y-4 flex-wrap justify-between">
        {Object.entries(skillsData)?.map(([skillName, { icon }], index) => (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            custom={index}
            key={crypto.randomUUID()}
            title={skillName}
            className="flex flex-col  justify-center items-center w-40 h-40 rounded-lg text-center bg-gray-500"
          >
            <img src={icon} alt={skillName} className="w-14" />
            {/* <skill.icon
              style={{ color: skill.iconColor }}
              className="text-6xl"
            /> */}
            <p className="text-2xl w-full px-2">{skillName}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
