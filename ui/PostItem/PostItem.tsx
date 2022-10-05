import { ReactElement } from 'react';
import {
  PostBody,
  PostBodyWrapper,
  PostCreatedAt,
  PostFooter,
  PostImage,
  PostItemWrapper, PostReadeMore,
  PostTitle
} from './PostItemStyle';
import { IPost } from '../../core/interfaces/IPost';

const PostItem = ({title, excerpt, date, slug, featuredImage, uri, author}:IPost): ReactElement => {
  return (
    <PostItemWrapper>
      {featuredImage.srcSet && (<PostImage srcSet={featuredImage.srcSet} alt={featuredImage.altText}/>)}
      <PostBodyWrapper>
        <PostTitle>
          { title }
        </PostTitle>
        <PostBody dangerouslySetInnerHTML={{__html: excerpt}}>
        </PostBody>
        <PostFooter>
          <PostCreatedAt dateTime={ date }>
            Data dodania : { date }
          </PostCreatedAt>
          <PostReadeMore href={`/posts/${slug}`} passHref>
            Czytaj Więcej
          </PostReadeMore>
        </PostFooter>
      </PostBodyWrapper>
    </PostItemWrapper>
  )
}

export default PostItem
