import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/todos', () => {
    return HttpResponse.json([
      { name: 'hello', id: 1 },
      { name: 'hello2', id: 2 },
      { name: 'hello3', id: 3 },
    ]);
  }),
];
