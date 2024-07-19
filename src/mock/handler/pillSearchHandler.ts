import { http, HttpResponse } from 'msw';
import pillSearchDummy from '../dummy/register/pillSearchDummy.json';
import pillSearchDummy2 from '../dummy/register/pillSearchDummy2.json';

export const pillSearchHandler = [
  http.get('http://127.0.0.1:8000/test/:drugName', async (request) => {
    //.get(`http://127.0.0.1:8000/test/:${searchInputValue}`) url의 맨끝을 읽어 오므로 :도 포함되어서 옴.
    const { drugName } = request.params;
    console.log(drugName);
    if (drugName === '타이레놀') {
      const drugData = await pillSearchDummy;
      console.log('pillSearchHandler...');
      console.log('msw... drugData : ', drugData);
      console.log('msw... dataType : ', typeof drugData);
      console.log('pillSearchHandler End. ..');
      return HttpResponse.json({ data: drugData });
    } else if (drugName === '아스피린') {
      const drugData = await pillSearchDummy2;
      console.log('pillSearchHandler...');
      console.log('msw... drugData : ', drugData);
      console.log('msw... dataType : ', typeof drugData);
      console.log('pillSearchHandler End. ..');
      return HttpResponse.json({ data: drugData });
    } else {
      console.log('Unknown drugName:', drugName);
      return HttpResponse.json({ error: 'Invalid drug name' }, { status: 400 });
    }
  }),
];
