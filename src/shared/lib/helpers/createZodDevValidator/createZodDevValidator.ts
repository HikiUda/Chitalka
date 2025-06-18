import { ZodType } from 'zod';
import { CONFIG } from '@/shared/kernel/config';

export const createZodDevValidator = <V>(loadSchema: () => Promise<ZodType<V>>) => {
    let schemaPromise: Promise<ZodType<V>> | undefined = undefined;

    if (CONFIG.IS_DEV) {
        schemaPromise = loadSchema();
    }

    return async (data: unknown): Promise<V> => {
        const schema = await schemaPromise;

        if (!schema) {
            return data as V;
        }

        return schema.parseAsync(data);
    };
};
