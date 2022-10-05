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
        date: new Date(item.node.date).toLocaleDateString('pl-PL', {timeZone: 'UTC'}),
        slug: item.node.slug,
        author: {
          firstName: item.node.author.node.firstName,
          lastname: item.node.author.node.lastName,
        },
        featuredImage: {
          altText: item.node?.featuredImage?.node?.altText ?? null,
          title: item.node?.featuredImage?.node?.title ?? null,
          srcSet: item.node?.featuredImage?.node?.srcSet ?? null,
        }
      }
    )
  });

}
async function getPost():Promise<string> {

  return 'test';
}


export { getPost, getPostsList }
