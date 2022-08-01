export interface INavigation {
  name: string;
  posts: {
    nodes?: any,
    slug: string,
    title: string
  }[]
}
