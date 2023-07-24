// import { restaurants } from "../common/restaurants";

let searchText = "";

const SearchComponent = (props) => {
  function filterEcommerce(searchText) {
    let filteredEcommerce = props.Ecommerce.filter((ecommerce) =>
      ecommerce.title.toLowerCase().includes(searchText.toLowerCase())
    );

    props.filteredEcommerce(filteredEcommerce);

    // add filter function
  }

  return (
    <div className="search flexsearch">
      <input
        type="text"
        onChange={(e) => {
          searchText = e.target.value;
          filterEcommerce(searchText);
        }}  
        className="search-text"
        ></input>
      <button  onClick={(e) => filterEcommerce(searchText)}>Search</button>
    </div>
  );
};

export default SearchComponent;