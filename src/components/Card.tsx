import { FC } from "react";
import { itemData } from "../util/data";
import CardListItem from "./CardListItem";

type CardProps = {
  data: itemData[];
};

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {data?.map((item) => (
        <CardListItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Card;
