import { setupWorker } from 'msw/browser';
import { devHandlers } from './devHandlers';

export const worker = setupWorker(...devHandlers({ delay: 1000 }));
