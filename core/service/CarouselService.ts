import { ICarouselGraphQL, ICarousel} from '../interfaces/ICarousel';
import client from '../utils/Apollo';
import { Carousel } from '../models/Carousel';

async function getCarousel(): Promise<ICarousel[]> {
  const { data } = await client.query(Carousel);
  return data.mediaItems.edges.map((item: {node:ICarousel}) => {
    return item.node;
  })
}

export { getCarousel }
