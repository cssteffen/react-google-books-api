import React from "react";
import "./searchbar.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className="searchBox_form">
        <label htmlFor="searchbox">Search:</label>
        <input placeholder="books" value="books" onChange={this.props}></input>
        <button type="submit" onSubmit={e => this.props.handleSearchBox()}>
          Search
        </button>
      </form>
    );
  }
}
