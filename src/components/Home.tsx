import { FC } from "react";
import { Buttons } from "../components/Buttons";
import HeroListItem from "../components/HeroListItem";
import { motion } from "framer-motion";
let easeing: number[] = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    opacity: 0,
    y: -60,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const heroText = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const heroTitle = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      transition,
    },
  },
};

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeing }}
      className="relative  bg-gray-100 p-1 md:p-0"
    >
      <motion.div className="container  mx-auto  flex flex-row gap-2 md:gap-8 pt-5 md:pt-16 ">
        <motion.div
          variants={heroText}
          initial="initial"
          animate="animate"
          className="flex-initial w-3/5 "
        >
          <motion.h1
            variants={heroTitle}
            className="text-2xl md:text-5xl font-bold   "
          >
            Find your dream Home right now
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xs md:text-sm my-5 ">
            We are real estate company we help you search your dream house near
            your working. Let's talk to discus
          </motion.p>
          <motion.div className=" text-nowrap">
            <Buttons title="Get Started" className="mr-2" />
            <Buttons title="Demo Video" variant="borderless" />
          </motion.div>
        </motion.div>

        <motion.div className="flex-initial  ">
          <motion.img
            src="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" w-32 md:w-full lg:w-80 h-4/5 md:h-80 object-cover rounded mx-auto"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto">
        <div className="  inline-flex gap-3 flex-wrap my-16">
          <HeroListItem title="Experienced engineer" />
          <HeroListItem title="Qualityfull materials" />
          <HeroListItem title="Affordable prices" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
