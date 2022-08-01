import { gql } from '@apollo/client';

export const Logo = {
  query: gql(`
    query MainLogo {
      siteLogo {
        title
        sourceUrl
      }
    }
  `)
}
