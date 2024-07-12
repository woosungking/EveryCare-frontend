import { setupWorker } from 'msw/browser';
import { pillSearchHandler } from './handler/PillSearchHandler';
import { ocrReturnhandler } from './handler/OcrReturnHandler';

export const worker = setupWorker(...pillSearchHandler, ...ocrReturnhandler);

worker.start();
