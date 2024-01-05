import { FC } from "react";

type SectionTItleProps = {
  title: string;
  description: string;
};

const SectionTItle: FC<SectionTItleProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-medium">{title}</h1>
      <p className="text-xs md:text-sm text-gray-500 my-7">{description}</p>
    </div>
  );
};

export default SectionTItle;
