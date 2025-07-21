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

export type GlobalSlice<F> = {
    resetAll: (init?: object) => void;
    getFilters: () => object;
    appliedFilters: F;
    setAppliedFilters: (appliedFilters: F) => void;
};
