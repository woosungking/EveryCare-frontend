import { setupServer } from 'msw/node';
import { pillSearchHandler } from './handler/PillSearchHandler';
import { ocrReturnhandler } from './handler/OcrReturnHandler';
export const server = setupServer(...pillSearchHandler, ...ocrReturnhandler);
