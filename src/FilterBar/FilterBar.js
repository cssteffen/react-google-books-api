import React from "react";
import "./filterbar.css";

export default class FilterBar extends React.Component {
  render() {
    return (
      <div className="filterBar_Box">
        <form className="printType_Form">
          <label htmlFor="printType">Print Type:</label>
          <select
            className="printType"
            //value="INSERTprop"
            //onChange="INSERTprop"
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
            {/*
            checked={select.val() === printTypeValue}
            onChange=
            {e =>
              this.props.handleSearch(
                printTypeValue,
                bookTypeValue,
                searchBoxValue
              )
            }
          */}
          </select>
        </form>
        <form className="bookType_Form">
          <label htmlFor="bookType">Book Type:</label>
          <select
            className="bookType"
            //value="INSERTprop"
            //onChange="INSERTprop"
          >
            <option value="No Filter">No Filter</option>
            <option value="ebooks">E-books</option>
            <option value="free-ebooks">Free e-books</option>
            <option value="paid-ebooks">Paid e-books</option>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            {/*
            checked={select.val() === bookTypeValue}
            onChange=
            {e =>
              this.props.handleSearch(e.target.value)}
            */}
          </select>
        </form>
      </div>
    );
  }
}
