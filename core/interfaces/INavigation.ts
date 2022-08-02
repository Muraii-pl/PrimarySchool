export interface INavigationGraphQL {
  name: string;
  posts: {
    nodes: [],
    slug: string,
    title: string
  }
}
export interface INavigation {
  name: string;
  posts: {
    slug: string,
    title: string
  }[]
}
