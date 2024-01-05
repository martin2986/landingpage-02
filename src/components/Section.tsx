import { FC, PropsWithChildren } from "react";
import { Buttons } from "./Buttons";
import { CardWrapper } from "./CardWrapper";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

type SectionProps = PropsWithChildren<{
  type: "left" | "right";
  image1: string;
  image2: string;
}>;

const Section: FC<SectionProps> = ({ children, type, image1, image2 }) => {
  let imageSection = (
    <div className="flex-1 flex flex-row relative">
      <div className=" w-3/5 h-3/4 mt-16 rounded border">
        <img src={image2} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative h-4/5 mt-5 w-20 ml-5 border rounded">
        <img src={image1} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/3 right-14">
          <Buttons variant="rounded">
            <GoArrowLeft />
          </Buttons>
        </div>
      </div>
      <CardWrapper className="absolute w-24 text-center top-1/2 -left-8">
        <h3 className="text-indigo-600 font-bold">25K</h3>
        <p className="text-xs text-gray-600">Properties Sold</p>
      </CardWrapper>
    </div>
  );
  if (type === "right") {
    return (
      <div className="flex flex-row gap-10 mb-16">
        <div className="flex-1">{children}</div>
        {imageSection}
      </div>
    );
  }
  return (
    <div className="h-full flex flex-row  my-16">
      <div className="flex-1 relative flex flex-row ">
        <div className=" h-4/5 mt-5 w-20 mr-5  rounded">
          <img src={image1} alt="" className="object-cover h-full rounded" />
        </div>
        <div className="absolute top-1/3 left-16 z-10">
          <Buttons variant="rounded">
            <GoArrowRight />
          </Buttons>
        </div>
        <div className="relative w-3/5 h-3/4 mt-16 rounded ">
          <img
            src={image2}
            alt=""
            className="object-cover h-full w-full rounded"
          />
          <CardWrapper className="absolute w-24 text-center top-1/2 -right-10">
            <h3 className="text-indigo-600 font-bold">25K</h3>
            <p className="text-xs text-gray-600">Properties Sold</p>
          </CardWrapper>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Section;
