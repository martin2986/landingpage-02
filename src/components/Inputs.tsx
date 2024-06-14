import {
  ComponentPropsWithoutRef,
  FC,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { UseFormRegister } from "react-hook-form";
interface InputPropsWithRegister extends InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  register: UseFormRegister<any>;
  name: string;
}
interface LabelProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  htmlFor: string;
}
type InputProps = ComponentPropsWithoutRef<"input">;

type InputsProps = InputPropsWithRegister | InputProps;
type InProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;
function isReactHookFormInput(
  props: InputsProps
): props is InputPropsWithRegister {
  // return !!(props as InputPropsWithRegister).register;
  return "register" in props;
}

const Inputs: FC<InProps> & {
  Label: FC<LabelProps>;
  Input: FC<InputsProps>;
} = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Input: FC<InputsProps> = (props) => {
  if (isReactHookFormInput(props)) {
    const { error, name, register } = props;
    return (
      <div className="w-full mb-4">
        <input
          className={`${
            error ? "border-red-500" : ""
          } shadow-sm border border-gray-300 text-black bg-base-light text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 block w-full p-2  dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light`}
          {...register(name, { required: true })}
          {...props}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>
    );
  }
  return (
    <input
      className={` shadow-sm border border-gray-300 text-black bg-base-light text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 block w-full p-2  dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light`}
      {...props}
    />
  );
};

const Label: FC<LabelProps> = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className=" text-sm font-medium text-black ">
      {label}
    </label>
  );
};

Inputs.Label = Label;
Inputs.Input = Input;
export default Inputs;
