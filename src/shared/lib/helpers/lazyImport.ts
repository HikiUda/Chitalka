/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from 'react';

export function lazyImport<T extends Record<string, any>, K extends keyof T>(
    factory: () => Promise<T>,
    name: K,
) {
    return lazy(() =>
        factory().then((module) => ({
            default: module[name],
        })),
    );
}
