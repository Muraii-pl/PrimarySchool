import { IPost, IPostGraphQL } from '../interfaces/IPost';
import client from '../utils/Apollo';
import { PostsList } from '../models/PostsList';

async function getPostsList(): Promise<IPost[]> {
  const res = await client.query(PostsList)
  return res.data.posts.edges.map((item: { node: IPostGraphQL }) => {

    return (
      {
        title: item.node.title,
        excerpt: item.node.excerpt,
        data: item.node.date,
        slug: item.node.slug,
        author: {
          firstName: item.node.author.node.firstName,
          lastname: item.node.author.node.lastName,
        },
        featuredImage: {
          altText: item.node.featuredImage.node.altText,
          title: item.node.featuredImage.node.title,
          srcSet: item.node.featuredImage.node.srcSet,
        }
      }
    )
  });

}
async function getPost():Promise<string> {

  return 'test';
}


export { getPost, getPostsList }
