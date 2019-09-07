import React from "react";
import Header from "./Header/Header";
import SearchResults from "./SearchResults/SearchResults";
//import SearchBox from "./SearchBox/SearchBox";
import BookSearch from "./BookSearch/BookSearch";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiBooks: [],
      searchBoxValue: " ",
      printTypeValue: "All",
      bookTypeValue: "No Filter"
    };
    console.log("<App />defaultProps " + this.props);
  }

  handleChange = e => {
    this.setState({
      searchBoxValue: e.target.value
    });
    console.log("<App />testing userInput: " + e.target.value);
    console.log(
      "<App />testing updating searchBoxValue: " + this.state.searchBoxValue
    );
  };

  handleBookFilter = e => {
    this.setState({
      bookTypeValue: e.target.value
    });
    console.log("<App />handBookFilter: " + e.target.value);
    console.log("<App />updating bookTypeValue: " + this.state.bookTypeValue);
    console.log("apiBooks:" + this.state.apiBooks);
  };

  handlePrintFilter = e => {
    this.setState({
      printTypeValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //const searchBoxValue = new FormData(event.target);

    //printTypeValue: this.state.printTypeValue,
    //bookTypeValue: this.state.bookTypeValue
    console.log("<App /> bookTypeValue: " + this.state.bookTypeValue);
    console.log("<App /> printTypeValue: " + this.state.printTypeValue);
    console.log("<App /> searchboxValue: " + this.state.searchBoxValue);

    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    const options = {
      method: "GET",
      "Content-Type": "application/json"
    };
    const API_Key = "AIzaSyAMwUnPu0Le4DE6lyYYSruNy12_m8vBU_k";
    let params =
      this.state.searchBoxValue +
      "&printType=" +
      this.state.printTypeValue +
      "&maxResults=40" +
      "&key=" +
      API_Key;
    if (this.state.bookTypeValue === "No Filter") {
      params =
        this.state.searchBoxValue +
        "&printType=" +
        this.state.printTypeValue +
        "&maxResults=40" +
        "&key=" +
        API_Key;
    } else {
      params =
        this.state.searchBoxValue +
        "&printType=" +
        this.state.printTypeValue +
        "&filter=" +
        this.state.bookTypeValue +
        "&key=" +
        API_Key;
    }
    const fetchURL = url + params;

    fetch(fetchURL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
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
  };

  componentDidMount() {}
  /*
  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchURL(this.props.userID);
    }
  }
  */

  render() {
    return (
      <section className="App">
        <Header />
        <BookSearch
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          filterBooks={this.handleBookFilter}
          filterPrint={this.handlePrintFilter}
        />
        {/*<SearchBox onSubmit={this.handleSubmit} onChange={this.handleChange} />*/}
        <SearchResults books={this.state.apiBooks} />
      </section>
    );
  }
}

App.defaultProps = {
  searchBoxValue: "books",
  printTypeValue: "All",
  bookTypeValue: "No Filter"
};

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
