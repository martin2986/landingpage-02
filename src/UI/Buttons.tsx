import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/helperFn";

const buttonVariants = cva(
  "bg-indigo-600 text-black inline-flex items-center rounded-sm text-xs md:text-base ",
  {
    variants: {
      variant: {
        default:
          "justify-center text-slate-50 rounded-sm inline-flex items-center text-xs md:text-base hover:bg-indigo-500 transition ease-in-out duration-300",
        outline:
          "bg-transparent justify-center border border-gray-400 rounded-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-black transition ease-in-out duration-500",
        borderless:
          "bg-transparent text-black justify-center underline inline-flex items-center",
        rounded:
          "rounded-full justify-center inline-flex items-center justify-center h-10 w-10",
      },
      size: {
        default: "text-xs md:text-sm p-1.5 ",
        wide: "text-xs md:text-sm px-6 py-2 ",
        sm: "px-2 py-1 text-xs md:text-sm min-w-10 md:min-w-16 ",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  value?: string;
}

const Buttons: FC<ButtonProps> = ({
  variant,
  size,
  className,
  title,
  children,
  value,
  ...props
}) => {
  return (
    <button
      value={value}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {title} {children}
    </button>
  );
};
export { Buttons, buttonVariants };
