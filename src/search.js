import booksList from "./booksList.json";

const search = (searchText,searchBy) => {
    
  return booksList.filter((res) =>
    res.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};
const SearchBar = ({ setSearchText,searchBy,searchText, SetFilterData }) => {
  return (
    <div className="inputWrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const searchResult = search(searchText,searchBy);
          SetFilterData(searchResult);
        }}
      >
        <input
          id="input"
          type="search"
          placeholder="Search Book by Title,Subject,Author"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button id="submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
