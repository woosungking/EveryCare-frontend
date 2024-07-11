import { setupWorker } from 'msw/browser';
import { pillSearchHandler } from './handler/pillSearchHandler';

export const worker = setupWorker(...pillSearchHandler);
