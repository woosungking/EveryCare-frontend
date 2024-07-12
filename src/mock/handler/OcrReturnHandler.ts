import { http, HttpResponse } from 'msw';
import ocrReturnDummy from '../dummy/register/ocrReturnDummy.json';

export const ocrReturnhandler = [
  http.post('api/v1/medicines/photo/', async () => {
    const ocrReturnDummyData = await ocrReturnDummy;
    console.log('msw 서버... 응답 ... data : ', ocrReturnDummy);
    return HttpResponse.json({ data: ocrReturnDummyData });
    // return new HttpResponse(JSON.stringify(ocrReturnDummyData), {
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // return new HttpResponse(ocrReturnDummy);
    // 그냥 ocrReturnDummy를 넣어도 되지만, 안전하게 비동기적으로 데이터를 가져온게 확인이 된 다음 전송하는게 바람직 하므로 이런방식
  }),
];
