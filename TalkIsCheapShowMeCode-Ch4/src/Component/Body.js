import { resturantList } from "../config";
import ResturantCard from "./ResturantCard";

const Body = () => {
  return (
    <div className="resturant-list">
      {resturantList.map((resturant) => {
        return <ResturantCard {...resturant.data} key={resturant.data.id} />;
      })}
    </div>
  );
};

export default Body;
