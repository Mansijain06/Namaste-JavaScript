import { useState } from "react";
import { resturantList } from "../config";
import ResturantCard from "./ResturantCard";

const filterData = (searchText, resturants) => {
  const filteredData = resturants.filter((resturant) =>
    resturant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState(resturantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={(e) => {
            const resturantData = resturantList;
            const data = filterData(searchText, resturantData);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
