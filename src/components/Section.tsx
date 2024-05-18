import { FC, PropsWithChildren } from "react";
import { Buttons } from "../UI/Buttons";
import { CardWrapper } from "./CardWrapper";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
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

type SectionProps = PropsWithChildren<{
  type: "left" | "right";
  image1: string;
  image2: string;
}>;

const Section: FC<SectionProps> = ({ children, type, image1, image2 }) => {
  let imageSection = (
    <div className="flex-1 flex flex-row  relative">
      <div className="relative md:w-3/5 h-3/4 mt-16 rounded border">
        <img src={image2} alt="" className="w-full h-full object-cover" />
        <CardWrapper className="absolute w-24 text-center top-1/2 -left-8">
          <h3 className="text-indigo-600 font-bold">25K</h3>
          <p className="text-xs text-gray-600">Properties Sold</p>
        </CardWrapper>
      </div>

      <div className="relative hidden md:block h-4/5 mt-5 w-20 ml-5 border rounded">
        <img src={image1} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/3 right-14">
          <Buttons variant="rounded">
            <GoArrowLeft />
          </Buttons>
        </div>
      </div>
    </div>
  );
  if (type === "right") {
    return (
      <div className="flex flex-row gap-10 container mx-auto  mb-16">
        <div className="flex-1">{children}</div>
        {imageSection}
      </div>
    );
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      exit="exit"
      whileInView="show"
      viewport={{ once: false }}
      className="h-full flex flex-row container mx-auto my-16"
    >
      <motion.div variants={item} className="flex-1 relative flex flex-row ">
        <div className="hidden md:block h-4/5 mt-5 w-20 mr-5  rounded">
          <img src={image1} alt="" className="object-cover h-full rounded" />
        </div>
        <div className="absolute hidden md:block top-1/3 left-16 z-10">
          <Buttons variant="rounded">
            <GoArrowRight />
          </Buttons>
        </div>
        <div className="relative w-11/12 h-full mx-auto md:w-3/5 md:h-3/4 md:mt-16 rounded ">
          <img
            src={image2}
            alt=""
            className="object-cover h-full w-full rounded"
          />
          <CardWrapper className="absolute w-24 text-center top-2/3 md:top-1/2 -left-3 md:-right-4 lg:-right-10">
            <h3 className="text-indigo-600 font-bold">25K</h3>
            <p className="text-xs text-gray-600">Properties Sold</p>
          </CardWrapper>
        </div>
      </motion.div>
      <div className="flex-1">{children}</div>
    </motion.div>
  );
};

export default Section;
