import { FC, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Buttons } from "../UI/Buttons";

type DropDownProps = {
  options: string[];
  title: "Location" | "Home type";
  onDropDown: (value: string) => void;
};

const DropDown: FC<DropDownProps> = ({ options, title, onDropDown }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownValue, setDropDownValue] = useState<string>(options[0]);
  const handleClick = (value: string) => {
    setDropDownValue(value);
    onDropDown(value);
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <h3 className="text-xs md:text-sm">{title}</h3>
      <Buttons
        onClick={() => setIsOpen((prev) => !prev)}
        variant="borderless"
        className="no-underline text-xs md:text-sm text-gray-600 inline-flex items-center md:gap-1"
      >
        {dropdownValue} <MdKeyboardArrowDown />
      </Buttons>
      {isOpen && (
        <ul className="absolute shadow-lg z-10 rounded cursor-pointer w-24 md:w-44 bg-white text-xs md:text-sm min-h-5 flex flex-col items-start">
          {options?.map((items) => (
            <li
              key={items}
              className="hover:bg-gray-100 p-2  w-full"
              onClick={() => handleClick(items)}
            >
              {items}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
