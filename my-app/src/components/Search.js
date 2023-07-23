import { restaurants } from "../common/restaurants";

let searchText = "";

const SearchComponent = (props) => {
  function filterRestaurants(searchText) {
    let filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    props.filteredRestaurants(filteredRestaurants);

    // add filter function
  }

  return (
    <div className="search flexsearch">
      <input
        type="text"
        onChange={(e) => (searchText = e.target.value)}
        className="search-text"
      ></input>
      <button  onClick={(e) => filterRestaurants(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;