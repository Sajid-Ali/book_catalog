import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IBookData from "types/book.type";

interface IBookCardProps {
  book: IBookData;
}

const BookCard: React.FunctionComponent<IBookCardProps> = ({ book }) => {
  let { title, description, image } = book;
  return (
    <div className="book">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="book--description">{description}</Card.Text>
          <Link className="book" to={`/book/${book._id}`}>
            View
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
