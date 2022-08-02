import { INavigation, INavigationGraphQL } from '../interfaces/INavigation';
import client from '../utils/Apollo';
import { Navigation } from '../models/Navigation';

async function getNavigation():Promise<INavigation[]> {
  const res = await client.query(Navigation)
  return res.data.categories.nodes.map((item: INavigationGraphQL) => {
    return ({
        name:item.name,
        posts: item.posts?.nodes?.map((val: {slug: string, title:string}) => {
          return ({
            title: val.title,
            slug: val.slug
          })
        })
      })
  })
}

export { getNavigation }
