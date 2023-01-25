import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resturant = useResturant(resId);

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <div>resturant id: {resId}</div>
        <h1>{resturant?.name}</h1>
        <img src={IMG_CDN_URL + resturant?.cloudinaryImageId} alt="reslogo" />
        <p>{resturant?.area}</p>
        <p>{resturant?.city}</p>
        <p>{resturant?.avgRating}</p>
        <p>{resturant?.costForTwo}</p>
      </div>
      <div>
        <ul>
          {Object.values(resturant?.menu?.items)?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
