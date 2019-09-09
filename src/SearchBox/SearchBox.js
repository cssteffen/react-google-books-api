import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";

export default class SearchBox extends React.Component {
  render() {
    console.log("OnSubmit props");
    console.log(this.props);

    return (
      <div>
        <SearchBar
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          /*handleSearch={this.props.handleSearch(
            printTypeValue,
            bookTypeValue,
            searchBoxValue
          )}*/
        />
        <FilterBar
          onChange={this.props.onChange}

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
