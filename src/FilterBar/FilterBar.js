import React from "react";
import "./filterbar.css";

export default class FilterBar extends React.Component {
  render() {
    return (
      <div className="filterBar_Box">
        <form className="printType_Form">
          <label htmlFor="printType">Print Type:</label>
          <select className="printType">
            <option value="All">All</option>
            <option value="Books">Books</option>
            <option value="e-Books">e-Books</option>
            <option value="Magazines">Magazines</option>
          </select>
        </form>
        <form className="bookType_Form">
          <label htmlFor="bookType">Book Type:</label>
          <select className="bookType">
            <option value="No Filter">No Filter</option>
            <option value="Books">Books</option>
            <option value="e-Books">e-Books</option>
            <option value="Magazines">Magazines</option>
          </select>
        </form>
      </div>
    );
  }
}
