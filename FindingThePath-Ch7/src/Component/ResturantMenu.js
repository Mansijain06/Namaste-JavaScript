import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [resturant, setResturant] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.73651&lng=75.889219&menuId=" +
        resId
    );
    const json = await data.json();
    setResturant(json.data);
  }

  return resturant.length === 0 ? (
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
          {Object.values(resturant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
