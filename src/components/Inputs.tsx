import { FC } from "react";
type InputsProps = {
  label: string;
};

const Inputs: FC<InputsProps> = ({ label, ...props }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium  dark:text-gray-300"
      >
        {label}
      </label>
      <input
        className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        {...props}
      />
    </div>
  );
};

export default Inputs;
