import { useCallback, useEffect, useState } from 'react';
import { Furniture, PaginationResponse } from './mocks/types';
import axios from 'axios';

function App() {
  const [page, setPage] = useState(1);
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const fetchUsers = useCallback(async () => {
    const { data } = await axios.get<PaginationResponse<Furniture>>(
      '/furnitures',
      {
        params: { page },
      }
    );
    setFurnitures(furnitures.concat(data.contents));
    setPage(data.pageNumber + 1);
    setNextPage(!data.isLastPage);
    setFetching(false);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setFetching(true);
      }
      console.log('normal scroll');
    };
    setFetching(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && hasNextPage) fetchUsers();
    else if (!hasNextPage) setFetching(false);
  }, [isFetching]);

  return (
    <div className='w-[100vw] grid grid-cols-3 gap-10 p-10'>
      {furnitures.map((furniture) => (
        <FurnitureCard key={furniture.id} furniture={furniture} />
      ))}
      {isFetching && <div>Loading...</div>}
    </div>
  );
}

export default App;

const FurnitureCard = ({
  furniture: {
    image_url,
    brand_name,
    name,
    cost,
    review_avg,
    review_count,
    free_delivery,
  },
}: {
  furniture: Furniture;
}) => {
  return (
    <div>
      <img src={image_url} alt='' />
      <div>{brand_name}</div>
      <div>{name}</div>
      <div>{cost}</div>
      <div>
        {review_avg} 리뷰{review_count}
      </div>
      <div>{free_delivery && '무료배송'}</div>
    </div>
  );
};
