import { Furniture } from '../mocks/types';

export const FurnitureCard = ({
  furniture: { image_url, brand_name, name, cost, review_avg, review_count, free_delivery },
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
