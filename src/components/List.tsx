import { FC } from "react";
import CardList from "./CardList";
export type CardListProps = {
  id: string;
  title: string;
  address: string;
  price: number;
  bedroom: number;
  bathroom: number;
  images: string[];
};
type ListProps = {
  posts: CardListProps[];
};

const List: FC<ListProps> = ({ posts }) => {
  return (
    <div className="flex flex-column gap-5">
      {posts.map((item) => (
        <CardList key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
