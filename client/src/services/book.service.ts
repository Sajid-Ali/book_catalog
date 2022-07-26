import IBookData, { ICreatBook } from "types/book.type";
import http from "../http-common";

class BookDataService {
  getAll() {
    return http.get<Array<IBookData>>("/books");
  }

  get(id: string | undefined) {
    return http.get<IBookData>(`/books/${id}`);
  }

  create(data: ICreatBook) {
    return http.post<IBookData>("/books", data);
  }

  update(data: ICreatBook, id: any) {
    return http.put<any>(`/books/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/books/${id}`);
  }
}

export default new BookDataService();
