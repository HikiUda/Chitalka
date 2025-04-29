import { ResponseArrayDataScheme } from '@packages/model/src/types/pagination';
import { z } from 'zod';

export const CategoriesScheme = z.object({
    id: z.number().int(),
    title: z.string(),
});

export const CategoriesResponseArrayData = ResponseArrayDataScheme(CategoriesScheme);

export type CategoriesType = z.infer<typeof CategoriesScheme>;
export type CategoriesResponseArrayDataType = z.infer<typeof CategoriesResponseArrayData>;
