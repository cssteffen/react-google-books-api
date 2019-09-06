import React from "react";
import "./searchresults.css";

export default class SearchResults extends React.Component {
  render() {
    for (let i = 0; i < this.props.books.length; i++) {
      Object.keys(this.props.books).map(function(key) {
        const bookTitle = this.props.books.volumeInfo.title;
        const author = this.props.books.volumeInfo.authors;
        const price = this.props.books.saleInfo.listPrice.amount;
        const description = this.props.books.volumeInfo.description;
        const bookImage = this.props.books.volumeInfo.imageLinks.smallThumnail;
      });

      return (
        <ul>
          <li>
            <div className="bookList-item">
              <div className="bookList-item-image">
                <img alt="book cover" width="100px" height="150px" />
              </div>
              <div className="bookList-item-content">
                <h2>{bookTitle}Book Title</h2>
                <p>
                  Author: INSERT AUTHOR(s) {"\n"}
                  Price: $9.99
                </p>
                <p>
                  Description from Google Books API - The resulting volume is
                  one that will be welcomed by students and general readers
                  alike.
                </p>
              </div>
            </div>
          </li>
        </ul>
      );
    }
  }
}
