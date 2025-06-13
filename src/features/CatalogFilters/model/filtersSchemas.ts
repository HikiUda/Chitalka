import { parse, isValid, format } from 'date-fns';
import { z, ZodTypeAny } from 'zod';

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

export const NumberFieldUrl = z.coerce.number().optional().catch(NaN);
export const NumberArrayFieldUrl = z
    .string()
    .transform((val) => val.split(',').map((v) => parseInt(v)))
    .pipe(z.number().int().array())
    .optional()
    .catch([]);

export const StringArrayFieldUrl = <T extends ZodTypeAny>(scheme: T) =>
    z
        .string()
        .transform((val) => val.split(','))
        .pipe(scheme.array())
        .optional()
        .catch([]);
export const DateFieldUrl = z.coerce
    .date()
    .transform((val) => {
        if (isValid(val)) return format(val, 'dd.mm.yyyy');
        return '';
    })
    .optional()
    .catch('');
