import React from "react";
import Header from "./Header/Header";
import SearchResults from "./SearchResults/SearchResults";
import SearchBox from "./SearchBox/SearchBox";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiBooks: [],
      searchBoxValue: "books",
      printTypeValue: "All",
      bookTypeValue: "No Filter"
    };
    //console.log("Showing searchBoxValue");
    //console.log(searchBoxValue);
    console.log("props");
    console.log(props);
  }

  setSearch(searchBoxValue) {
    this.setState({ searchBoxValue: searchBoxValue });
    //this.handleSearch(searchBoxValue);
  }

  componentDidMount(searchBoxValue) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    const options = {
      method: "GET",
      "Content-Type": "application/json"
    };
    const API_Key = "AIzaSyAMwUnPu0Le4DE6lyYYSruNy12_m8vBU_k";

    /* ========= WILL NEED TO FIX THIS - but checking callback first ====== */
    const fetchURL = url + searchBoxValue + "&key=" + API_Key;

    /*
      "&printType=" +
      printTypeValue +
      "&filter=" +
      bookTypeValue +
      */

    fetch(fetchURL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again laterl");
        }
        return response;
      })
      .then(response => response.json())

      .then(data => {
        const apiBooks = data["items"];

        this.setState({
          apiBooks,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchURL(this.props.userID);
    }
  }

  render() {
    return (
      <section className="App">
        <Header />
        <SearchBox
          handleSearchBox={searchBoxValue => this.setSearch(searchBoxValue)}
          /*handleSearch=
        {this.state.handleSearch(printTypeValue, bookTypeValue, searchBoxValue)}
        */
        />
        <SearchResults books={this.state.apiBooks} />
      </section>
    );
  }
}

/*
  handleSearch(searchBoxValue, printTypeValue, bookTypeValue) {
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    const options = {
      method: "GET",
      "Content-Type": "application/json"
    };
    const API_Key = "AIzaSyAMwUnPu0Le4DE6lyYYSruNy12_m8vBU_k";

    /* ========= WILL NEED TO FIX THIS - but checking callback first ====== /
    const fetchURL = url + searchBoxValue + "&key=" + API_Key;

    /*
      "&printType=" +
      printTypeValue +
      "&filter=" +
      bookTypeValue +
      *

    fetch(fetchURL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again laterl");
        }
        return response;
      })
      .then(response => response.json())

      .then(data => {
        const apiBooks = data["items"];

        this.setState({
          apiBooks,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  */
