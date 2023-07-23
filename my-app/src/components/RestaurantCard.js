import { RESTAURANT_IMG_URL } from "../common/restaurant_image_url";

const RestaurantCard=(props)=>{
    const{
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwoString,
        cloudinaryImageId,
    }=props.res_details;

    return(
        <>
        <div className="restaurant-card">
            <img src={`${RESTAURANT_IMG_URL}${cloudinaryImageId}`}
        alt="rest-pic"
      ></img>
        <h3>{name}</h3>
      <h4>{cuisines}</h4>

      <div className="res-info">
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4> {costForTwoString}</h4>
      </div>
      </div>
        </>
    );
};

export default RestaurantCard;