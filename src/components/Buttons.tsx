import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../util/helperFn";

const buttonVariants = cva(
  "bg-indigo-600 text-slate-50 inline-flex items-center  rounded-sm  hover:bg-transparent  hover:text-black text-xs md:text-base",
  {
    variants: {
      variant: {
        default:
          " border border-indigo-600 text-slate-50 inline-flex items-center  rounded-sm  hover:bg-transparent hover:border border-gray-400 hover:text-black text-xs md:text-base",
        outline:
          "bg-transparent text-black border border-gray-400 rounded-sm hover:bg-indigo-600 hover:text-white",
        borderless:
          "bg-transparent text-black underline   inline-flex items-center ",
        rounded:
          "rounded-full border border-indigo-600 inline-flex items-center justify-center h-10 w-10",
      },
      size: {
        default: "text-xs md:text-sm p-2 ",
        sm: "px-2 py-1 text-xs md:text-sm min-w-16 md:min-w-22 ",
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
    VariantProps<typeof buttonVariants> {}

const Buttons = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, title, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {title} {children}
      </button>
    );
  }
);

export { Buttons, buttonVariants };
