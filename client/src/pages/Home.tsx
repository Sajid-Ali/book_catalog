import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bookService from "services/book.service";
import IBookData from "types/book.type";
import BookCard from "../components/BookCard";

interface IHomePageProps {}

interface IHomePageStates {
  books: IBookData;
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const [list, setList] = useState<IHomePageStates["books"][]>([]);

  useEffect(() => {
    retrieveBooks();
  }, []);

  const retrieveBooks: any = () => {
    bookService
      .getAll()
      .then((response: any) => {
        const { data } = response;
        setList(data.result);
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
          <div className="books">
            <div className="books-list">
              {list.map((book: IBookData) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
