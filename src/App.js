import React from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";
import SearchResults from "./SearchResults/SearchResults";

//const books = [];
/*
const books = [
  {
    title: "Book Title",
    author: "Author(s)",
    price: 9.99,
    printType: "All",
    url: "http://www.google.com",
    coverImg: "",
    description:
      "Insert description fo book here and have more information from the google book API."
  },
  {
    title: "Google",
    url: "http://www.google.com",
    rating: "3",
    description: "No evil"
  }
];
*/
//let apiBooks = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiBooks: [],
      searchBoxValue: "books",
      printTypeValue: "All",
      bookTypeValue: "No Filter"
    };
  }

  componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes";
    const options = {
      method: "GET",
      "Content-Type": "application/json"
    };
    const API_Key = "AIzaSyAMwUnPu0Le4DE6lyYYSruNy12_m8vBU_k";
    /*
    const params = {
      q: "books",
      key: API_Key
    };
*/
    /* ========= WILL NEED TO FIX THIS - but checking callback first ====== */
    const fetchURL = url + "?" + "q=quilting&key=" + API_Key;

    fetch(fetchURL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again laterl");
        }
        return response;
      })
      .then(response => response.json())

      .then(data => {
        console.log(data);
        const apiBooks = data["items"];
        console.log(apiBooks);

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

  render() {
    return (
      <section className="App">
        <Header />
        <SearchBar />
        <FilterBar />
        <SearchResults books={this.state.apiBooks} />
      </section>
    );
  }
}
