import { FC, ReactNode } from "react";

type TitleWIthDescProps = {
  title: string;
  desc: string;
  Icon?: ReactNode;
  sm?: boolean;
};

const TitleWIthDesc: FC<TitleWIthDescProps> = ({ title, desc, Icon, sm }) => {
  return (
    <div className={`${sm ? "sm:px-2" : "px-8"} flex items-center gap-4`}>
      {Icon}
      <div className="featureText">
        <span className="text-xs font-medium">{title}</span>
        <p className="text-xs font-light">{desc}</p>
      </div>
    </div>
  );
};

export default TitleWIthDesc;
