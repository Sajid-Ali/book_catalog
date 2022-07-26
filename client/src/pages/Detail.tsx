import "./book.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import bookService from "services/book.service";
import IBookData from "types/book.type";
import { Link, useNavigate, useParams } from "react-router-dom";

export interface IDetailPageProps {}

interface IDetailPageStates {
  book: IBookData;
}

const DetailPage: React.FunctionComponent<IDetailPageProps> = (props) => {
  const [book, setBook] = useState<IDetailPageStates["book"]>({} as IBookData);
  let { id } = useParams();

  useEffect(() => {
    retrieveBook();
  }, []);
  const navigate = useNavigate();

  const createMarkup = (markup: string) => ({ __html: markup });

  const retrieveBook: any = () => {
    bookService
      .get(id)
      .then((response: any) => {
        const { data } = response;
        setBook(data.result);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteBook: any = () => {
    bookService
      .delete(id)
      .then((response: any) => {
        const { data } = response;
        if (data.success) {
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <div className="wrapper">
            <div>
              <h1>{book.title}</h1>
              <h3>{book.author}</h3>
            </div>
            <div className="actions">
              <Link className="book" to={`/book/edit/${book._id}`}>
                Edit
              </Link>

              <Button className="book" onClick={deleteBook}>
                Delete
              </Button>
            </div>
          </div>
          <div className="book-card--body">
            <figure className="book-card--thumbnail">
              <img
                src={book.image}
                className="img-responsive"
                alt={book.title}
              />
            </figure>
            <p
              className="book-card--description"
              dangerouslySetInnerHTML={createMarkup(book.description)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
