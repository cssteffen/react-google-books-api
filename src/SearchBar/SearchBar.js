import React from "react";
import "./searchbar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className="searchBox_form">
        <label htmlFor="searchbox">Search:</label>
        <input placeholder="books" value="books"></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
