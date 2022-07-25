import "./book.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import bookService from "services/book.service";
import IBookData from "types/book.type";
import { useParams } from "react-router-dom";

export interface IDetailPageProps {}

interface IDetailPageStates {
  book: IBookData;
}

const DetailPage: React.FunctionComponent<IDetailPageProps> = (props) => {
  const [book, setBook] = useState<IDetailPageStates["book"]>({} as IBookData);
  let { id } = useParams();

  const createMarkup = (markup: string) => ({ __html: markup });

  useEffect(() => {
    retrieveBook();
  }, []);

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
  return (
    <Container>
      <Row>
        <Col>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
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
