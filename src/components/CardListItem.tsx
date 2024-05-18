import { FC } from "react";
import { itemData } from "../util/data";
import { Buttons } from "../UI/Buttons";
import { CardWrapper } from "./CardWrapper";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.8,
    },
  },
};

const CardListItem: FC<itemData> = ({
  houseName,
  address,
  price,
  description,
  image,
}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      exit="exit"
      whileInView="show"
      viewport={{ once: false }}
    >
      <motion.div variants={item}>
        <CardWrapper className=" h-fit border  w-full ">
          <div className="-mx-1 -mt-1 md:-mx-3 md:-mt-3 ">
            <img src={image} alt="" className="rounded-t " />
          </div>
          <div>
            <h3 className="text-base font-medium">{houseName}</h3>
            <p className="text-xxs text-gray-600 my-2">{address}</p>
            <p className="text-xs  text-gray-600">{description}</p>
            <div className="flex flex-row justify-between items-center my-3">
              <span className="text-sm md:text-base font-medium text-indigo-600">
                ${price}
              </span>
              <Buttons title="Read More" variant="outline" />
            </div>
          </div>
        </CardWrapper>
      </motion.div>
    </motion.div>
  );
};

export default CardListItem;
