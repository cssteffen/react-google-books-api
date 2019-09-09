import React from "react";
import "./booksearch.css";

export default class BookSearch extends React.Component {
  render() {
    //console.log("<BookSearch /> input value: " + this.props.value);

    return (
      <div className="searchBar__Box">
        <form onSubmit={e => this.props.onSubmit(e)} className="searchBox_form">
          <div className="searchbox_Box">
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
          </div>
          <div className="filterBar_Box">
            <div className="printType_Form">
              <label htmlFor="printType">Print Type:</label>
              <select
                className="printType"
                value={this.props.value}
                onChange={e => this.props.filterPrint(e)}
              >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
              </select>
            </div>
            <div className="bookType_Form">
              <label htmlFor="bookType">Book Type:</label>
              <select
                className="bookType"
                value={this.props.value}
                onChange={e => this.props.filterBooks(e)}
              >
                <option value="No Filter">No Filter</option>
                <option value="ebooks">E-books</option>
                <option value="free-ebooks">Free e-books</option>
                <option value="paid-ebooks">Paid e-books</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
