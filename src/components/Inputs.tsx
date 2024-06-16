import { ComponentPropsWithoutRef, FC, InputHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util/helperFn';
import { UseFormRegister } from 'react-hook-form';

const inputVariants = cva(
  'shadow-sm border mb-4 border-gray-300 text-black bg-base-light text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light',
  {
    variants: {
      variant: {
        default:
          ' shadow-sm h-10 border mb-4 border-gray-300 text-black bg-base-light text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light',
        error:
          ' shadow-sm border border-red-500 text-black bg-base-light text-sm rounded-sm focus:ring-primary-100 focus:border-primary-100 dark:focus:ring-primary-100 dark:focus:border-primary-100 dark:shadow-sm-light',
      },
      inputSize: {
        default: 'w-full p-2',
        wide: 'w-64',
        sm: 'w-10 h-6 lg:h-10 lg:w-20 p-1',
      },
    },
    defaultVariants: {
      inputSize: 'default',
      variant: 'default',
    },
  }
);
interface InputPropsWithRegister extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  error: string | undefined;
  register: UseFormRegister<any>;
  name: string;
}
interface LabelProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  htmlFor: string;
}
interface InputVariants extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

type InputsProps = InputPropsWithRegister | InputVariants;
type InProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;
function isReactHookFormInput(props: InputsProps): props is InputPropsWithRegister {
  return 'register' in props;
}

const Inputs: FC<InProps> & {
  Label: FC<LabelProps>;
  Input: FC<InputsProps>;
} = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Input: FC<InputsProps> = (props) => {
  if (isReactHookFormInput(props)) {
    const { error, name, register, inputSize, variant, className } = props;
    return (
      <>
        <input className={cn(inputVariants({ inputSize, variant, className }))} {...register(name, { required: true })} {...props} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </>
    );
  }
  const { inputSize, variant, className } = props;
  return <input className={cn(inputVariants({ inputSize, variant, className }))} {...props} />;
};

const Label: FC<LabelProps> = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-xs md:text-sm my-2 font-medium text-black ">
      {label}
    </label>
  );
};

Inputs.Label = Label;
Inputs.Input = Input;
export default Inputs;
