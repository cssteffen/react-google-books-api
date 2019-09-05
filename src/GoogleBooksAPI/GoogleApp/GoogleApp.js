import React from "react";
import Header from "../Header";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

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

export default class GoogleApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apibooks: [],
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
    const params = {
      q: "books",
      key: API_Key
    };
    const fetchURL = url + "?" + "q=quilting&key=" + API_Key;

    fetch(fetchURL, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again laterl");
        }
        return response;
      })
      .then(response => response.json())
      .then(items => {
        this.setState({
          books: items,
          error: null
        });
        console.log(items);
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
        <SearchResults />
      </section>
    );
  }
}
