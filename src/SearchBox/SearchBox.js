import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";

export default class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
        /*handleSearch={this.props.handleSearch(
            printTypeValue,
            bookTypeValue,
            searchBoxValue
          )}*/
        />
        <FilterBar
        /*handleSearch={this.props.handleSearch(
            printTypeValue,
            bookTypeValue,
            searchBoxValue
          )}*/
        />
      </div>
    );
  }
}
