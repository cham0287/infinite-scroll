import { http, HttpResponse } from 'msw';
import furnitures from './furnitures.json';
import { Furniture } from './types';

// [코드 1] 무한스크롤 응답 인터페이스
export interface PaginationResponse<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export const handlers = [
  http.get('/furnitures', ({ request }) => {
    const url = new URL(request.url);
    console.log(request);
    const page = url.searchParams.get('page');
    console.log(page);

    return HttpResponse.json<PaginationResponse<Furniture>>(furnitures[page]);
  }),
];
