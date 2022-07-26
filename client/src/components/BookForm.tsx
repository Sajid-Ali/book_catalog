import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import IBookData, { ICreatBook } from "types/book.type";

interface IBookFormProps {
  book?: IBookData;
  handleOnSubmit: (book: ICreatBook) => void;
}

const BookForm: React.FunctionComponent<IBookFormProps> = (props) => {
  const [book, setBook] = useState(() => {
    return {
      title: props?.book?.title || "",
      author: props?.book?.author || "",
      price: props?.book?.price || "",
      year: props?.book?.price || "",
      description: props?.book?.description || "",
      image: props?.book?.image || "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { title, author, price, description, year, image } = book;

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const values = [title, author, price, description, year, image];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = (field && `${field}`.trim()) || "";
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book: ICreatBook = {
        title,
        author,
        price,
        description,
        year,
        image,
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    switch (name) {
      case "year":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title || ""}
            placeholder="Enter name of title"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author || ""}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="year"
            value={year || ""}
            placeholder="Enter published year"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price || ""}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            as="textarea"
            type="textarea"
            name="description"
            value={description || ""}
            placeholder="Enter description of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="image"
            value={image || ""}
            placeholder="Enter image URL of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
