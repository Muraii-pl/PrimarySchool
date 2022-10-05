import { device } from '../../core/utils/breakpoints';
import styled from 'styled-components';
import Link from 'next/link';


const PostItemWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 0;
`

const PostImage = styled.img`
  width: 100%;
  height: 160px;
  border:1px solid ${ props => props.theme.mainColor };;
  border-radius: 10px;
  filter: drop-shadow(-2px,2px 4px rgba(0,0,0,.25)) ;
  object-fit: cover;
  order:1
  `

const PostTitle = styled.h3 `
  margin: 15px 0 10px;
`

const PostBodyWrapper = styled.section`
  order: 2;
`

const PostBody = styled.div`

`

const PostFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  order:3;
  font-size: 14px;
`

const PostCreatedAt = styled.time`
  color: #e1e1e1;
`

const PostReadeMore = styled(Link)`
  &:focus,&:hover{
    text-decoration: underline
  }
`

export { PostItemWrapper, PostImage, PostTitle, PostBodyWrapper, PostBody, PostReadeMore, PostFooter, PostCreatedAt }
