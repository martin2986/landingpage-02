import { FC, ReactNode } from "react";
import { cn } from "../util/helperFn";
import { VariantProps, cva } from "class-variance-authority";

interface CardWrapperProps extends VariantProps<typeof cardVariants> {
  className?: string;
  children?: ReactNode;
}

const cardVariants = cva(
  "relative  bg-white p-2 rounded-lg mb-3 shadow-lg  md:py-3 md:px-3 w-full",
  {
    variants: {
      variant: {
        default: "relative  rounded   w-full",
      },
      size: {
        default: "md:py-3 p-1  md:px-3 ",
        md: "w-1/2 ",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const CardWrapper: FC<CardWrapperProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn(cardVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
};

export { CardWrapper, cardVariants };
