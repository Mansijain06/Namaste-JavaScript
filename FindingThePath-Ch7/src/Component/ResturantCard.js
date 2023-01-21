import { IMG_CDN_URL } from "../config";

const ResturantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="card-img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
