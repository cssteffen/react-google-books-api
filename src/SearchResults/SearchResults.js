import React from "react";
import "./searchresults.css";
import Card from "../Card/Card";

export default class SearchResults extends React.Component {
  render() {
    // console.log("<SearchResults /> props:" + this.props);

    const books =
      this.props.books !== undefined
        ? this.props.books.map((book, i) => <Card key={i} book={book} />)
        : "No search results found";

    return (
      <ul>
        <li>{books}</li>
      </ul>
    );
  }
}
