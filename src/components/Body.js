import { useState } from "react";
import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText, restaurants){
  return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
}

const Body = ()=>{
  const [restaurants, setRestaurants] = useState(restaurantList);
  //searchText is a local state variable
  const [searchText,setSearchInput] = useState("KFC");// To create local state variables
    return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchText}
          onChange={(e)=>{
            setSearchInput(e.target.value);
            }}
        />
        <button className="search-btn" 
        onClick={()=>{
          //need to filter the data
          const data =  filterData(searchText,restaurants);
          setRestaurants(data);
        }}>Search</button>
      </div>

      <div className = "restaurant-list">
      {
        restaurants.map((restaurant) =>{
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
        })
      }
      </div>
    </>
    );
}

export default Body;