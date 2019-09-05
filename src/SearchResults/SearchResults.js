import React from "react";
import "./searchresults.css";

export default class SearchResults extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <div className="bookList-item">
            <div className="bookList-item-image">
              <img alt="book cover" width="100px" height="150px" />
            </div>
            <div className="bookList-item-content">
              <h2>Book Title</h2>
              <p>
                Author: INSERT AUTHOR(s) {"\n"}
                Price: $9.99
              </p>
              <p>
                Description from Google Books API - The resulting volume is one
                that will be welcomed by students and general readers alike.
              </p>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}
