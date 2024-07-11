import { http } from 'msw';
import { pillSearchDummy } from '../pillSearchDummy';

export const pillSearchHandler = [
  http.get(
    'http://127.0.0.1:8000/test/?drugName=${inputValue}',
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(pillSearchDummy));
    },
  ),
];
