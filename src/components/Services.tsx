import { FC, useState } from "react";
import { Buttons } from "./Buttons";
import Card from "./Card";
import SectionTItle from "./SectionTItle";
import { apartmentData } from "../util/data";
import { filteredData } from "../util/helperFn";

type ServicesProps = {};

const Services: FC<ServicesProps> = () => {
  const [selected, setSelected] = useState<string>("");

  const [displayedItems, setDisplayedItems] = useState<{}[]>(
    apartmentData?.slice(0, 3)
  );
  const allData = filteredData(displayedItems, selected);
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleClick = (e) => {
    setSelected(e.target.value);
  };
  const handleShowAll = () => {
    setShowAll(true);
    setDisplayedItems(apartmentData);
  };

  return (
    <div className="p-1 md:p-0 container mx-auto">
      <div className="mx-auto md:w-1/2 text-center font-medium">
        <SectionTItle
          title="Our popular building services"
          description=" Building a next generation collaboration platform to connect renters,
          homeowner, and agents."
        />
        <div className="flex flex-row gap-1 md:gap-5 justify-center mb-8">
          <Buttons
            value="House"
            title="House"
            variant="outline"
            className="px-4 `md:px-6"
            onClick={handleClick}
          />
          <Buttons
            value="Apartment"
            title="Apartment"
            variant="outline"
            className="px-4 md:px-6"
            onClick={handleClick}
          />
          <Buttons
            value="Villa"
            title="Villa"
            variant="outline"
            className="px-4 md:px-6"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="text-center w-full mb-16">
        <Card data={allData} />
        {!showAll && (
          <Buttons title="View More Properties" onClick={handleShowAll} />
        )}
      </div>

      <div className=" lg:px-16 md:px-5 p-2 md:py-10 bg-indigo-600 mx-auto w-full text-center my-8">
        <h3 className="text-base md:text-3xl  text-white font-semibold">
          Our Company Provides services any Town in Our Country
        </h3>
        <p className="text-white text-xs md:text-sm mb-6">
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
