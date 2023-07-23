import { useState } from "react";
import { restaurants } from "../common/restaurants";
import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./Search";


const BodyComponent=()=>{
    // const url="https://dummyjson.com/products";
    const [filteredRestaurantsArray, setFilteredRestaurants] =
    useState(restaurants);
    function filteredRestaurants(restaurants) {
        setFilteredRestaurants(restaurants);
      }
    return(
        <>
        <div className="filter-search-bar flexsearch">
        <SearchComponent filteredRestaurants={filteredRestaurants} />
        <button className="top-rated ">Top Rated Restaurants</button>
      </div>

        <section className="mainmatter">
        {/* <!-- heading on top of that section --> */}
    <div className="heading">
        <p>
                    Today's deals
        </p>
    </div>
    
     {/* <!-- the four images below --> */}
     <section className="thumbnail">
        <div className="card thumbanailhover">
        <img className="image" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="images"></img>
        <p >
            Buy
        </p>
        </div>
        <div className="card thumbanailhover">
            <img className="image" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="images"></img>
             <p>
                Sell
            </p>
        </div>
        <div className="card thumbanailhover">
            <img className="image" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="images"></img>
                <p>
                    Deals of the day
                </p>
        </div>
        <div className="card thumbanailhover">
            <img className="image" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="images"></img>
                <p>
                    70% off
                </p>
        </div>
    </section>
    
    {/* <!-- /*thumbnail2*/ }
    <div className="thumbnail2">
        <div className="card2 thumbanailhover">
            <img className="image2" src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1585157958423-Customer%20Support.png" alt="images"></img>
            <p>
                Customer Support
            </p>
        </div>
        <div className="card2 thumbanailhover">
        <img className="image2" src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="images"></img>
            <p>
                Deals of the day
            </p>
        </div>
    </div>
    <h1 className="bigsale">The Big Sale day is here!</h1>
    <p className="paraclass">
        <b>Sale 50% flat on all items</b> listen on website for next 24 hours.
        Buy <b>products worth 5000 to earn gift vouchers</b> and more.<b>Shopping worth 
            7500</b> 
        makes you eligible for a cashback
         worth whopping 1500 along with gift vouchers.
        So don't miss this opportunity
         and grab the best deals here only at 
        Dream Ecommerce site!
        Enjoy shopping for your favourite items!
    </p>
    </section>
    <div className="res-container">
        {filteredRestaurantsArray.map((restaurant) => (
          <RestaurantCard key={restaurant.id} res_details={restaurant} />
        ))}
      </div>
    </>
    );
};

export default BodyComponent;