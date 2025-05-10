import { ZodType } from 'zod';

export const createZodDevValidator = <V>(loadSchema: () => Promise<ZodType<V>>) => {
    let schemaPromise: Promise<ZodType<V>> | undefined = undefined;

    if (__IS_DEV__) {
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
