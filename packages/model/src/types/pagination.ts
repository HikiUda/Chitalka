import { z } from 'zod';

export interface ResponseArrayData<T> {
    data: T[];
}

export interface Pagination<T> extends ResponseArrayData<T> {
    prevPage: number | null;
    nextPage: number | null;
}
export const ResponseArrayDataScheme = <T extends z.ZodType>(zObj: T) => {
    return z.object({
        data: zObj.array(),
    });
};
export const PaginationScheme = <T extends z.ZodType>(zObj: T) => {
    return z.object({
        data: zObj.array(),
        prevPage: z.number().nullable(),
        nextPage: z.number().nullable(),
    });
};
