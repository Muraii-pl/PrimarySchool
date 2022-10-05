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

export const MainPostListIsSticky = {
  query: gql(`
    query MyQuery {
      posts(first: 5, where: {orderby: {field: DATE, order: DESC}, onlySticky: true}) {
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

export const MainPostList = {
  query: gql(`
    query MyQuery {
      posts(first: 5, where: {orderby: {field: DATE, order: DESC}, onlySticky: true}) {
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
