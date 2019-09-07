import React from "react";
import "./searchbar.css";

export default class SearchBar extends React.Component {
  render() {
    console.log("input value");
    console.log(this.props.value);
    return (
      <form onSubmit={e => this.props.onSubmit(e)} className="searchBox_form">
        <label htmlFor="searchbox">Search:</label>
        <input
          type="text"
          name="searchBoxValue"
          id="searchBoxValue"
          placeholder="search for a book"
          value={this.props.name}
          onChange={e => this.props.onChange(e)}
        ></input>
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}
