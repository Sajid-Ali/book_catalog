import React from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "components/BookForm";
import { ICreatBook } from "types/book.type";
import { Col, Container, Row } from "react-bootstrap";
import bookService from "services/book.service";

const AddBookPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleOnSubmit = (book: ICreatBook) => {
    bookService
      .create(book)
      .then((response: any) => {
        const { data } = response;
        if (data.success) {
          navigate("/", { replace: true });
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BookForm handleOnSubmit={handleOnSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default AddBookPage;
