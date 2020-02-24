import React from "react";

const Navbar = props => {
  const { menuItems, onSearch, formInput, onChange, index } = props;

  return (
    <div>
      <ul className="navbar navbar-dark bg-primary my-2 mr-sm-2">
        {menuItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
        <input
          className="form-control mr-sm-2"
          type="number"
          placeholder="Search index"
          defaultValue={formInput}
          onChange={onChange}
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <span>The Index is {index}</span>
    </div>
  );
};

export default Navbar;
