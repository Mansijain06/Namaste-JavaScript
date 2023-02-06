import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const FoodItem = ({ name, cloudinaryImageId, description, price }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-2 m-2 w-56">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="card-img"
        className="h-32 mb-2"
      />
      <h2 className="font-bold">{name}</h2>
      <h3>{description}</h3>
      <h4>Ruppes: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
