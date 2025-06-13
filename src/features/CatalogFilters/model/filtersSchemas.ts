import { parse, isValid } from 'date-fns';
import { z } from 'zod';

function parseDate(input: string): string | undefined {
    const formats = ['yyyy', 'MM.yyyy', 'dd.MM.yyyy'];
    for (const fmt of formats) {
        const date = parse(input, fmt, new Date());
        if (isValid(date)) return date.toISOString();
    }
    return undefined;
}

export const NumberField = z.number().optional().catch(undefined);
export const NumberArrayField = z
    .number()
    .array()
    .transform((v) => v.join(','))
    .optional()
    .catch('');
export const StringArrayField = z
    .string()
    .array()
    .transform((v) => v.join(','))
    .optional()
    .catch('');
export const DateField = z.string().transform(parseDate).optional().catch(undefined);
