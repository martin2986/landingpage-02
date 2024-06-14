import { LuUtilityPole } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import TitleWIthDesc from "@/features/listing/TitleWIthDesc";
import Map from "@/lib/Map";
import { Buttons } from "@/UI/Buttons";
import { useState } from "react";
type ListingDetailAsideProps = {};

const ListingDetailAside = () => {
  const [saved, setSaved] = useState(false);
  const handleSavePost = () => {
    setSaved((prev) => !prev);
  };
  return (
    <div className=" md:w-1/3 features flex-2 bg-gray-100 h-full overflow-y-auto">
      <div className="wrapper px-2 md:px-5">
        <p className="title font-bold mb-5">General</p>
        <div className="listVertical bg-white p-4 rounded-md my-3">
          <TitleWIthDesc
            title="Utilities"
            desc="Tenant is responsible"
            Icon={<LuUtilityPole className="w-6 h-6" />}
          />
          <TitleWIthDesc
            title="Utilities"
            desc="Tenant is responsible"
            Icon={<LuUtilityPole className="w-6 h-6" />}
          />
          <TitleWIthDesc
            title="Utilities"
            desc="Tenant is responsible"
            Icon={<LuUtilityPole className="w-6 h-6" />}
          />
        </div>
        <p className="title">Sizes</p>
        <div className="sizes flex justify-between my-3">
          <div className="size flex items-center gap-4 bg-white p-1 rounded-md">
            <MdOutlinePhotoSizeSelectSmall />
            <span className="text-xxs lg:text-xs">23 sqft</span>
          </div>
          <div className="size flex items-center gap-4 bg-white p-1 rounded-md">
            <IoBedOutline />
            <span className="text-xxs lg:text-xs">2 beds</span>
          </div>
          <div className="size flex items-center gap-4 bg-white p-1 rounded-md">
            <FaShower />
            <span className="text-xxs lg:text-xs">5 bathroom</span>
          </div>
        </div>
        <p className="title ">Nearby Places</p>
        <div className="listHorizontal flex gap-5 justify-between p-1 bg-white rounded-md my-3">
          <TitleWIthDesc title="School" desc="100m away" sm />
          <TitleWIthDesc title="Bus Stop" desc="100m away" sm />
          <TitleWIthDesc title="Restaurant" desc="100m away" sm />
        </div>
        <p className="title">Location</p>
        <div className="w-full h-[300px]">
          <Map />
        </div>
        <div className="buttons flex items-center justify-between my-4">
          <Buttons variant="outline">
            <IoChatboxEllipsesOutline className="w-4 h-4 mr-1" />
            Send a Message
          </Buttons>
          <Buttons
            onClick={handleSavePost}
            variant="outline"
            className={`${saved ? " bg-indigo-600 text-white" : ""} `}
          >
            <CiBookmark className="w-4 h-4 mr-1" />
            {saved ? "Place Saved" : "Save the Place"}
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailAside;
