export interface ICarouselGraphQL {
  mediaItems: {
    edges: [{
      node: ICarousel
    }]
  }
}

export interface ICarousel {
  __typename?: string;
  id: string;
  link: string;
  title: string;
  description: string | null;
}
