import React from "react";

const SearchIndex = props => {
  const { onSearch, searchInput, onChange, result } = props;

  return (
    <div className="m-2">
      <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
        <input
          className="form-control mr-sm-2"
          type="number"
          placeholder="Search index"
          // defaultValue={searchInput.input}
          onChange={onChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default SearchIndex;
