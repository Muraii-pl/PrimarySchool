import { gql } from '@apollo/client';

export const PostsList = {
  query: gql(`
     query MyQuery {
      posts {
        edges {
          node {
            title
            uri
            slug
            excerpt
            author {
              node {
                firstName
                lastName
              }
            }
            date
            featuredImage {
              node {
                altText
                srcSet
                title
              }
            }
          }
        }
      }
    }
    `)
}
