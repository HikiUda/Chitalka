import { ResponseArrayDataScheme } from '@packages/model/src/types/pagination';
import { z } from 'zod';

export const MangaCoverScheme = z.object({
    id: z.number().int(),
    cover: z.string().url(),
});

export const MangaCoverResponseArrayDataScheme = ResponseArrayDataScheme(MangaCoverScheme);

export type MangaCoverType = z.infer<typeof MangaCoverScheme>;
export type MangaCoverResponseArrayData = z.infer<typeof MangaCoverResponseArrayDataScheme>;
