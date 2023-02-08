import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../config";

const useResturant = (resId) => {
  const [resturant, setResturant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(FETCH_RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setResturant(json.data);
  }

  return resturant;
};

export default useResturant;
