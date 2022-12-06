import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./search";
import booksList from "./booksList.json";
import { useState } from "react";
import Filters from "./filters.js";
import AllBooks from "./AllBooks.js";

const root = ReactDOM.createRoot(document.getElementById("root"));


const DevRevTitle = () => {
  return <h1 id="title">DevRev Library</h1>;
};


const MainApp = () => {
  const [searchBy, setSearchBy] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [FilterData, SetFilterData] = useState(booksList);
  return (
    <div>
      <DevRevTitle />
      <SearchBar setSearchText={setSearchText} searchBy={searchBy} searchText={searchText} SetFilterData={SetFilterData} />
      <Filters setSearchBy={setSearchBy}/>
      <AllBooks
        FilterData={FilterData}
      />
    </div>
  );
};

root.render(<MainApp />);
