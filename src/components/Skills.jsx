import SectionTitle from "./SectionTitle";
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
  const { skillsData } = useMainContext();
  return (
    <div id="skills">
      <SectionTitle>Skills</SectionTitle>
      <p className="text-font-sub-color mb-3">
        Always strive to expand your knowledge and evolve as an individual. 💪
      </p>
      <div className="flex gap-1 gap-y-4 flex-wrap justify-between">
        {Object.entries(skillsData)?.map(([skillName, { icon }], index) => (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
            custom={index / 2}
            key={crypto.randomUUID()}
            title={skillName}
            className="flex flex-col  justify-center items-center w-40 h-40 rounded-lg text-center shadow-md dark:bg-gray-500"
          >
            <img src={icon} alt={skillName} className="w-14" loading="lazy" />
            <p className="text-2xl w-full px-2">{skillName}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
