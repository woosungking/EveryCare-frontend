import { http, HttpResponse } from 'msw';
import ocrReturnDummy from '../dummy/register/ocrReturnDummy.json';

export const ocrReturnhandler = [
  http.post('api/v1/medicines/photo/', async () => {
    const ocrReturnDummyData = await ocrReturnDummy;
    console.log('msw 서버... 응답 ... data : ', ocrReturnDummy);
    return HttpResponse.json({ ocrReturnDummyData });
  }),
];
