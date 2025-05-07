import { ResponseArrayDataScheme } from '@/shared/types/pagination';
import { z } from 'zod';

export const MangaCoverScheme = z.object({
    id: z.number().int(),
    cover: z.string(),
});

export const MangaCoverResponseArrayDataScheme = ResponseArrayDataScheme(MangaCoverScheme);

export type MangaCoverType = z.infer<typeof MangaCoverScheme>;
export type MangaCoverResponseArrayData = z.infer<typeof MangaCoverResponseArrayDataScheme>;
