import { FC } from "react";
import { Link } from "react-router-dom";
type FooterItemProps = {
  items: {
    path: string;
    name: string;
  }[];
  title: string;
};

const FooterItem: FC<FooterItemProps> = ({ items, title = "Contact" }) => {
  return (
    <div>
      <h1 className="text-sm md:text-base"> {title}</h1>
      <ul className="mt-8 text-xs text-gray-500 dark:text-gray-400 font-medium">
        {items.map(({ path, name }) => (
          <li className="mb-4">
            <Link to={path} className=" hover:underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
