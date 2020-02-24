import React, { Component } from "react";
import Navbar from "./Navbar";
import binarySearch from "./binary";

class Main extends Component {
  state = {
    menuItems: ["Home", "Algorithms", "about"],
    formInput: { input: 0 },
    index: 0
  };

  handleSearch = event => {
    event.preventDefault();
    const index = binarySearch(this.state.formInput.input);
    this.setState({ index });
    console.log(index);
  };

  handleChange = event => {
    const formInput = { ...this.state.formInput };
    formInput.input = event.currentTarget.value;
    this.setState({ formInput });
  };

  render() {
    const { index, formInput, menuItems } = this.state;
    return (
      <div className="main">
        <Navbar
          index={index}
          formInput={formInput}
          menuItems={menuItems}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        ></Navbar>
      </div>
    );
  }
}

export default Main;
