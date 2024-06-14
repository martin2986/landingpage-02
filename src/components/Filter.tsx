import { FC } from "react";
import { useSearchParams } from "react-router-dom";

type FilterProps = {
  filterField: string;
  options: string[];
};

const Filter: FC<FilterProps> = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0);

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <select className="pr-2 h-5 outline-none text-xs">
      {options.map((item, id) => (
        <option
          value={item}
          key={id}
          className="hover:bg-gray-100 p-2 w-full h-36 overflow-y-auto"
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default Filter;
