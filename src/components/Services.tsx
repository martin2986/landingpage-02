import { FC } from "react";
import { Buttons } from "./Buttons";
import Card from "./Card";
import SectionTItle from "./SectionTItle";

type ServicesProps = {};

const Services: FC<ServicesProps> = () => {
  return (
    <div className=" ">
      <div className="mx-auto w-1/2 text-center font-medium">
        <SectionTItle
          title="Our popular building services"
          description=" Building a next generation collaboration platform to connect renters,
          homeowner, and agents."
        />
        <div className="flex flex-row gap-5 justify-center mb-8">
          <Buttons title="House" variant="outline" className="px-6" />
          <Buttons title="Apartment" variant="outline" className="px-6" />
          <Buttons title="Villa" variant="outline" className="px-6" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="text-center w-full mb-16">
        <Buttons title="View More Properties" />
      </div>
      <div className=" md:px-16 py-10 bg-indigo-600 mx-auto w-full text-center my-8">
        {/* <div className="absolute -top-20 -left-20 rounded-full bg-indigo-400 w-52 h-52"></div> */}
        <h3 className="text-2xl md:text-4xl  text-white font-semibold">
          Our Company Provides services any Town in Our Country
        </h3>
        <p className="text-white text-sm mb-6">
          Do i have to record this meeting gain traction, root-and-branch
          review, nor game-plan who's record
        </p>
        <Buttons
          title="Join Our Community"
          className="bg-white border-white text-black hover:text-white"
        />
      </div>
    </div>
  );
};

export default Services;
