export default interface IBookData {
  _id: string;
  title: string;
  year?: string | null;
  author?: string | null;
  price?: string | null;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreatBook {
  title?: string;
  year?: string;
  author?: string;
  price?: string;
  description?: string;
  image?: string;
}
