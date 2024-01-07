import { FC } from "react";
import { motion } from "framer-motion";
const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

type SectionTItleProps = {
  title: string;
  description: string;
};

const SectionTItle: FC<SectionTItleProps> = ({ title, description }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      exit="exit"
      whileInView="show"
      viewport={{ once: false }}
    >
      <motion.div variants={item}>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-xl lg:text-4xl font-medium"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-xs md:text-sm text-gray-500 my-7"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SectionTItle;
