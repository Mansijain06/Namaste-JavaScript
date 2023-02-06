import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resturant = useResturant(resId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="flex m-12">
      <div className="pr-8">
        <div>resturant id: {resId}</div>
        <h1 className="font-bold text-2xl py-4">{resturant?.name}</h1>
        <img src={IMG_CDN_URL + resturant?.cloudinaryImageId} alt="reslogo" />
        <p>{resturant?.area}</p>
        <p>{resturant?.city}</p>
        <p>{resturant?.avgRating}</p>
        <p>{resturant?.costForTwo}</p>
        <div>
          {/* <button onClick={() => handleAddItem()} className="bg-green-200 p-2">
          Add me
        </button> */}
        </div>
      </div>
      <div>
        <ul>
          {Object.values(resturant?.menu?.items)?.map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="bg-green-200 p-1"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
