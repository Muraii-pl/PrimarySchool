import { gql } from '@apollo/client';

export const PageList = {
  query: gql(`
    query Page {
      pages {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
}
