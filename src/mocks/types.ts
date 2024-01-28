export interface PaginationResponse<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export interface Furniture {
  id: number;
  is_scrap: boolean;
  is_wish: boolean;
  type: Type;
  badges: Badge[];
  benefit_badges: unknown[];
  brand: Brand;
  brand_id: number;
  brand_name: string;
  cost: number;
  coupon_badge: CouponBadge | null;
  delivery_service_code: DeliveryServiceCode;
  delivery_start_at: DeliveryStartAt | null;
  delivery_type: number;
  free_delivery: boolean;
  image_url: string;
  is_bespoke: boolean;
  is_buyable: boolean;
  is_cheapest_price: boolean;
  is_consultable: boolean;
  is_delivery_date_specified: boolean;
  is_departure_today: boolean;
  is_discontinued: boolean;
  is_discounted: boolean;
  is_free_delivery: boolean;
  is_hidden: boolean;
  is_overseas_purchase: boolean;
  is_remodel: boolean;
  is_retail_delivery: boolean;
  is_selling: boolean;
  is_sold_out: boolean;
  is_special_price: boolean;
  is_third_party_logistic: boolean;
  lowest_guarantee: boolean;
  name: string;
  original_image_url: string;
  original_price: number;
  raw_image_url: string;
  resized_image_url: string;
  review_avg: number;
  review_count: number;
  scrap_count: number;
  selling: boolean;
  selling_cost: number;
  selling_price: number;
  sold_out: boolean;
  status: number;
  used_card_count: number;
  user_id: number;
  view_count: number;
  week_rank: number;
  wish_count: number;
  is_departure_today_exp?: string;
}

export interface Badge {
  id: number;
  thumbnail_badge_id: number;
  position: number;
  image: Image;
}

export interface Image {
  url: string;
  width: null;
  height: null;
}

export interface Brand {
  id: number;
  name: string;
}

export interface CouponBadge {
  image: string;
  title: string;
  discount_ratio: null;
  fixed_discount_amount: null;
}

export type DeliveryServiceCode = 'CARGO' | 'NORMAL' | 'OHOUSE';

export interface DeliveryStartAt {
  template: Template;
}

export interface Template {
  text: string;
  values: string[];
}

export type Type = 'Production';
