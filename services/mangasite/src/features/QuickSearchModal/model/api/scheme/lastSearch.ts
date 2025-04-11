import { ResponseArrayDataScheme } from '@packages/model/src/types/pagination';
import { z } from 'zod';

export const LastSearchScheme = z.string();
export const LastSearchResponseArrayDataScheme = ResponseArrayDataScheme(LastSearchScheme);
export type LastSearchType = z.infer<typeof LastSearchScheme>;
