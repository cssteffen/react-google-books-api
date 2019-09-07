import React from "react";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class Card extends React.Component {
  render() {
    const title = this.props.book.volumeInfo.title;
    const description = this.props.book.volumeInfo.description;
    const bookImage = this.props.book.volumeInfo.imageLinks.smallThumbnail;
    const link = this.props.book.volumeInfo.canonicalVolumeLink;

    //const authors = this.props.book.volumeInfo.authors.join(", ");
    const authors = this.props.book.volumeInfo.authors;
    console.log(authors);

    const cost =
      this.props.book.saleInfo.saleability === "FOR_SALE"
        ? USCurrencyFormat.format(this.props.book.saleInfo.listPrice.amount)
        : "Not For Sale";

    return (
      <div className="display-results">
        <div className="bookList-item">
          <div className="bookList-item-image">
            <img
              src={bookImage}
              alt="book cover"
              width="150px" /*height="150px"*/
            />
          </div>
          <div className="bookList-item-content">
            <a href={link}>
              <h2>{title}</h2>
            </a>
            <p>
              Author: {authors} <br />
              Price: {cost}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

/* ========= TRIAL CODE ========== */
/*
const book = this.props.books.map((book, i) => (
    // const { title, authors, description, imageLinks } = book.volumeInfo;
    <Card
      key={i}
      bookTitle={title}
      author={authors}
      price={book.saleInfo.listPrice.amount}
      description={description}
      bookImage={imageLinks}
    />
*/
