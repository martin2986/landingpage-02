import { forwardRef } from 'react';

interface DropdownTypes<T> {
  options: T[];
  title?: string;
  className?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownTypes<string | number>>(({ options = [], title = '', className, ...props }, ref) => {
  return (
    <div className="mt-1">
      <p className="text-xs md:text-sm font-medium text-black">{title}</p>
      <select
        ref={ref}
        className="w-10 md:w-14 h-6 lg:h-10 lg:w-20 border border-gray-300 shadow-sm outline-none text-xs lg:p-2 mb-4 "
        {...props}
      >
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Dropdown;
