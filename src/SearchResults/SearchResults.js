import React from "react";
import "./searchresults.css";
import Card from "../Card/Card";

export default class SearchResults extends React.Component {
  render() {
    console.log("SearchResults props");
    console.log(this.props);

    const books = this.props.books.map((book, i) => (
      <Card key={i} book={book} />
    ));

    console.log("SearchResults books");
    console.log(books);

    return (
      <ul>
        <li>{books}</li>
      </ul>
    );
  }
}

/* ============= TRIAL CODE ================ */
/*
    const books = this.props.books.map((book, i) => (
      // const { title, authors, description, imageLinks } = book.volumeInfo;
      <Card
        key={i}
        book={books}
      />
    ));
    */

/*
    SAMPLE FROM VIDEO
    const Person = (props) => <h4>{props.person.name}</h4>
    <Person key={item.name} person={item} />
    */
/*
       {
        const bookTitle = this.book.volumeInfo.title;
        const author = this.props.volumeInfo.authors;
        const price = this.props.saleInfo.listPrice.amount;
        const description = this.props.volumeInfo.description;
        const bookImage = this.props.volumeInfo.imageLinks.smallThumnail;
      }   */
