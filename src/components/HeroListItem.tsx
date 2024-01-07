import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

type HeroListItemProps = {
  title: string;
  className?: string;
};

const HeroListItem: FC<HeroListItemProps> = ({ title }) => {
  return (
    <div className="text-xxs md:text-sm my-3">
      <div className="inline-flex gap-1 items-center text-nowrap">
        <FaCheckCircle className="text-indigo-600" />
        {title}
      </div>
    </div>
  );
};

export default HeroListItem;
