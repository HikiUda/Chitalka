/* eslint-disable @typescript-eslint/no-explicit-any */
import { StateCreator } from 'zustand';

export type CatalogFilterSlice<T, S = any> = (
    storeName: string,
) => StateCreator<S, [['zustand/devtools', never]], [], T>;

export type CatalogFilterInitialState<T> = Pick<
    T,
    {
        [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
    }[keyof T]
>;

export type CatalogFilterSliceSelector<T> = { [K in keyof T]: () => T[K] };

export interface GlobalSlice<F> {
    resetAll: () => void;
    getFilters: () => object;
    setInitialState: (init: any) => void;
    appliedFilters: F;
    setAppliedFilters: (appliedFilters: F) => void;
}
