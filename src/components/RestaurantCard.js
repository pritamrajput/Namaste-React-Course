import { IMG_CDN_URL } from "../constants";

// Restaurant card
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravel}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2>{name}</h2>
       <h3>{cuisines.join(", ")}</h3>
        <h3>{lastMileTravel} minutes</h3> 
      </div>
    )
}

export default RestaurantCard;