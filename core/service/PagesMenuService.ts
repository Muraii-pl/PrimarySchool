import { IPagesMenuGraphQL, IPagesMenu } from '../interfaces/IPagesMenu';
import client from '../utils/Apollo';
import { PageList } from '../models/PagesMenu'

async function getPageList(): Promise<IPagesMenu[]> {
  const res = await client.query(PageList);
  return res.data.pages.edges.map((page: IPagesMenuGraphQL) => {
    return ({
      title: page.node.title,
      slug: page.node.slug
    });
  })
}
export { getPageList }
