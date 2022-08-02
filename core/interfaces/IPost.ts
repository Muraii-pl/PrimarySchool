import { ICoverImage } from './ICoverImage';

export interface IPostGraphQL {
    title: string;
    uri: string;
    excerpt: string;
    slug: string;
    featuredImage: ICoverImage,
    author: {
      node?: any;
      firstName: string;
      lastName: string;
    }
    date: string
}
export interface IPost {
  title: string;
  uri: string;
  excerpt: string;
  slug: string;
  featuredImage: ICoverImage,
  author: {
    firstName: string;
    lastName: string;
  }
  date: string
}
