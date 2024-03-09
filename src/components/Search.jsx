import { useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  function search() {
    props.searchFunction(searchText);
  }
  return (
    <>
      <input
        type="text"
        id="search"
        className="searchInput"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <button className="searchLabel" onClick={search}>Search</button>
    </>
  );
};

export default Search;
