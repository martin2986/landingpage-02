import heroImage from '@/assets/hero.png';
import SearchListing from '@/features/Homepage/SearchListing';
import { motion } from 'framer-motion';
import { FC } from 'react';
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
        <motion.div variants={heroText} initial="initial" animate="animate" className="flex-initial w-3/5 ">
          <motion.h1 variants={heroTitle} className="text-2xl md:text-5xl font-bold">
            Find your dream Home right now
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xs md:text-sm my-5 ">
            We are real estate company we help you search your dream house near your working. Let's talk to discus
          </motion.p>
        </motion.div>

        <motion.div className="flex-initial  ">
          <motion.img
            src={heroImage}
            alt="heroImage"
            className=" w-32 md:w-full lg:w-80 h-4/5 md:h-80 object-cover rounded mx-auto"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </motion.div>

      <SearchListing />
    </motion.div>
  );
};

export default Home;
