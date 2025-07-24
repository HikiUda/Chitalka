/* eslint-disable @typescript-eslint/no-explicit-any */
import z from 'zod';

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export class PersistStorage<T extends z.ZodType<any, any, JSONValue>> {
    constructor(
        private key: string,
        private schema: T,
        private defaultValue: z.output<T>,
    ) {}

    get() {
        const value = localStorage.getItem(this.key);

        return z
            .string()
            .transform((value) => {
                try {
                    return JSON.parse(value);
                } catch (e) {
                    return undefined;
                }
            })
            .pipe(this.schema)
            .catch(this.defaultValue)
            .parse(value);
    }

    set(value: z.input<T>) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
}
