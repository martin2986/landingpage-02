import { FC } from "react";
import { Buttons } from "./Buttons";
import { CardWrapper } from "./CardWrapper";

type CardProps = {};

const Card: FC<CardProps> = () => {
  return (
    <CardWrapper className=" h-fit border  w-80 ">
      <div className="-mx-3 -mt-3">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-t"
        />
      </div>
      <div>
        <h3 className="text-base font-medium">Casta Vista</h3>
        <p className="text-xxs text-gray-600 my-2">201 pablo road</p>
        <p className="text-xs  text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus
          tempore sint mollitia expedita ipsa ipsam ipsum excepturi qui.
        </p>
        <div className="flex flex-row justify-between items-center my-3">
          <span className="text-sm md:text-base font-medium text-indigo-600">
            $725K
          </span>
          <Buttons title="Read More" variant="outline" />
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
