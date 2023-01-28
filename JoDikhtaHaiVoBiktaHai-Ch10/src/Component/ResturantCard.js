import { IMG_CDN_URL } from "../config";

const ResturantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="p-2 m-2 w-56">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="card-img"
        className="h-32 mb-2"
      />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>★&nbsp;{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
