import React from "react";
import Header from "./Header/Header";
import SearchResults from "./SearchResults/SearchResults";
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
  }

  handleChange = e => {
    this.setState({
      searchBoxValue: e.target.value
    });
    //console.log("<App />testing userInput: " + e.target.value);
    // console.log(
    // "<App />testing updating searchBoxValue: " + this.state.searchBoxValue
    //);
  };

  handleBookFilter = e => {
    this.setState({
      bookTypeValue: e.target.value
    });
  };

  handlePrintFilter = e => {
    this.setState({
      printTypeValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("<App /> bookTypeValue: " + this.state.bookTypeValue);

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

    if (this.state.bookTypeValue !== "No Filter") {
      params = params + "&filter=" + this.state.bookTypeValue;
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
