import { forwardRef } from "react";

interface DropdownTypes<T> {
  options: T[];
  title?: string;

  className?: string;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownTypes<string | number>>(
  ({ options = [], title = "", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className} relative bg-white text-black w-full mb-4`}
      >
        <p className="block text-xs text-black">{title}</p>
        <select {...props} className="pr-2 w-fit h-5 outline-none text-xs">
          {options.map((item, id) => (
            <option
              value={item}
              key={id}
              className="hover:bg-gray-100 p-2 w-full h-36 overflow-y-auto"
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Dropdown;
