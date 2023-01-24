import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const filterData = (searchText, resturants) => {
  const filteredData = resturants.filter((resturant) =>
    resturant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [allResturants, setAllResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);
  // console.log(useState());
  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.73651&lng=75.889219&page_type=DESKTOP_WEB_LISTING"
    );

    if (data.ok) {
      const json = await data.json();
      setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
    } else {
      return Promise.reject("Oops! something went wrong " + data.status);
    }
  }

  // if (filteredResturants?.length == 0) {
  //   return <h1>No restaurants match your filter!</h1>;
  // }

  return !allResturants.length ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter name of resturant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={(e) => {
            const data = filterData(searchText, allResturants);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      {!filteredResturants?.length ? (
        <h1>No restaurants match your filter!</h1>
      ) : (
        <div className="resturant-list">
          {filteredResturants.map((resturant) => {
            return (
              <Link
                to={"/resturant/" + resturant.data.id}
                key={resturant.data.id}
              >
                <ResturantCard {...resturant.data} />
              </Link>
            );
          })}
        </div>
      )}
      {/* {((a = 10), console.log(a))} */}
    </div>
  );
};

export default Body;
