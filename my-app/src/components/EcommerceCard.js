
const RestaurantCard=({res_details})=>{
    const{
        title,
        description,
        rating,
        discountPercentage,
        brand,
        thumbnail,
    }=res_details;

    return(
        <>
        <div className="restaurant-card">
            <img src={thumbnail}
        alt="rest-pic"
      ></img>
        <h3>{title}</h3>
      <h4>{description}</h4>

      <div className="res-info">
        <h4>{rating}</h4>
        <h4>{discountPercentage}</h4>
        <h4> {brand}</h4>
      </div>
      </div>
        </>
    );
};

export default RestaurantCard;