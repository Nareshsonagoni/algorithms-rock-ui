import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchIndex from "./SearchIndex";
import InputForm from "./InputForm";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";

class Main extends Component {
  state = {
    searchInput: { input: 0 },
    result: " ",
    inputArray: [],
    inputArrayLength: { value: 0 },
  };

  handleSearch = async (event) => {
    event.preventDefault();
    const { input } = this.state.searchInput;
    fetch(
      `https://h1heuomixl.execute-api.us-east-1.amazonaws.com/dev/api/binary_search/${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("in data");
        this.setState({ result: data.result });
      });
    console.log("finished");
  };

  handleChange = (event) => {
    const searchInput = { ...this.state.searchInput };
    searchInput.input = event.currentTarget.value;
    console.log(searchInput.input);
    this.setState({ searchInput });
  };

  handleArray = (event) => {
    let inputArray = [...this.state.inputArray];
    inputArray = event.currentTarget.value;
    // console.log(event.currentTarget.value);
    this.setState({ inputArray });
    // console.log(inputArray);
  };

  handleArrayLength = (event) => {
    let inputArrayLength = { ...this.state.inputArrayLength };
    while (inputArrayLength.value < event.currentTarget.value) {
      inputArrayLength.value += 1;
    }
    this.setState({ inputArrayLength });
  };

  render() {
    const {
      result,
      searchInput,
      menuItems,
      inputArray,
      inputArrayLength,
    } = this.state;

    console.log(inputArray);

    return (
      <Router>
        <div className="main">
          <Nav />
          {/* <Switch> */}
          {/* <Route path="/" exact component={Home} /> */}
          <SearchIndex
            result={result}
            searchInput={searchInput}
            onChange={this.handleChange}
            onSearch={this.handleSearch}
          ></SearchIndex>
          <InputForm
            inputArrayLength={inputArrayLength}
            arrayLength={this.handleArrayLength}
            arrayChange={this.handleArray}
            handleInputArray={this.handleInputArray}
          ></InputForm>
          {/* <Route path="/about" exact Component={About} />
            <Route path="/portfolio" Component={Portfolio} />
          </Switch> */}
        </div>
      </Router>
    );
  }
}

export default Main;
