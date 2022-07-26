import BookForm from "components/BookForm";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookService from "services/book.service";
import IBookData, { ICreatBook } from "types/book.type";

interface IEditBookPageStates {
  book: IBookData;
}

const EditBookPage: React.FunctionComponent = () => {
  const [book, setBook] = useState<IEditBookPageStates["book"]>(
    {} as IBookData
  );
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    retrieveBook();
  }, [id]);

  const retrieveBook: any = () => {
    bookService
      .get(id)
      .then((response: any) => {
        const { data } = response;
        setBook(data.result);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleOnSubmit = (input: ICreatBook) => {
    setBook({ ...book, ...input });
    bookService
      .update(input, id)
      .then((response: any) => {
        const { data } = response;
        setBook(data.result);
        if (data.success) {
          navigate(`/book/${id}`);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      <BookForm book={book} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBookPage;
