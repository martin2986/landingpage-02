import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  register: UseFormRegister<any>;
  label: string;
  labelSm?: boolean;
  name: string;
}

const Inputs: FC<InputProps> = ({
  label,
  error,
  name,
  register,
  labelSm,
  ...props
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={label}
        className={`block  text-black ${
          labelSm ? "text-xs" : "text-sm font-medium"
        }`}
      >
        {label}
      </label>
      <input
        className="shadow-sm border border-gray-300 text-black w-full text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 block p-2  dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light"
        {...register(name, { required: true })}
        {...props}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default Inputs;
