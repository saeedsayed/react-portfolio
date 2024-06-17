import React, { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "./index";
import { motion } from "framer-motion";

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
  return (
    <div id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex gap-1 gap-y-4 flex-wrap justify-between">
        {skills.map((skill, index) => (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            custom={index}
            key={crypto.randomUUID()}
            title={skill.name}
            className="flex flex-col  justify-center items-center w-40 h-40 rounded-lg text-center bg-gray-500"
          >
            <skill.icon
              style={{ color: skill.iconColor }}
              className="text-6xl"
            />
            <p className="text-2xl w-full px-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
