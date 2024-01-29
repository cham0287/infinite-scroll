import { useCallback, useEffect, useState } from 'react';
import { Furniture, PaginationResponse } from './mocks/types';
import axios from 'axios';
import { FurnitureCard } from './components/FurnitureCard';

function App() {
  const [page, setPage] = useState(1);
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const fetchUsers = useCallback(async () => {
    const { data } = await axios.get<PaginationResponse<Furniture>>('/furnitures', {
      params: { page },
    });
    setFurnitures(furnitures.concat(data.contents));
    setPage(data.pageNumber + 1);
    setNextPage(!data.isLastPage);
    setFetching(false);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      console.log(window.innerHeight);
      console.log(scrollTop);
      console.log(offsetHeight);
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
    <div className='w-[100vw] grid grid-cols-4 gap-10 p-10'>
      {furnitures.map((furniture) => (
        <FurnitureCard key={furniture.id} furniture={furniture} />
      ))}
      {isFetching && <div>Loading...</div>}
    </div>
  );
}

export default App;
