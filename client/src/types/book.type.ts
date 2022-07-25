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
