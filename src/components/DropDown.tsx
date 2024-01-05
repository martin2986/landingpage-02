import { FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type DropDownProps = {};

const DropDown: FC<DropDownProps> = () => {
  return (
    <div>
      <h3 className="text-xs md:text-sm">Location</h3>
      <p className="text-xs md:text-sm text-gray-600 inline-flex items-center md:gap-1">
        city <MdKeyboardArrowDown />
      </p>
    </div>
  );
};

export default DropDown;
