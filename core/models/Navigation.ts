import { gql } from '@apollo/client';

export const Navigation = {
  query: gql(`
    query Navbar {
      categories {
        nodes {
          name
          posts {
            nodes {
              slug
              title
            }
          }
        }
      }
    }
  `)
}
