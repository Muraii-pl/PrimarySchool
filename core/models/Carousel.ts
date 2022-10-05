import { gql } from '@apollo/client';

export const Carousel = {
  query: gql(`
    query MainLogo {
      mediaItems(where: {search: "Karuzela"}) {
        edges {
          node {
            id
            link
            title
            description
          }
        }
      }
    }
  `)
}
