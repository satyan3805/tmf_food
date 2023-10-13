import RestuarantCard from "./RestuarantCard";
import { resCardObj } from "../utils/mockdata.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunts] = useState(resCardObj);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonObj = await data.json();
    console.log(jsonObj);

    setListOfRestraunts(
      jsonObj?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle
        .restaurants
    );
    //setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="body-div">
      <div className="filter"></div>
      <div className="search-div">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 3.5
            );
            console.log(filteredList);
            setListOfRestraunts(filteredList);
          }}
        >
          Top Ratted Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestuarantCard resInfo={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
