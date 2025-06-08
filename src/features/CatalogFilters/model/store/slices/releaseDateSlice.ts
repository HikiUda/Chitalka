import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface ReleaseDateSlice {
    releaseDateFrom: string;
    releaseDateTo: string;
    setReleaseDateFrom: (releaseDateFrom: string) => void;
    setReleaseDateTo: (releaseDateTo: string) => void;
}

export const releaseDateSliceInitialState: Pick<
    ReleaseDateSlice,
    'releaseDateFrom' | 'releaseDateTo'
> = {
    releaseDateFrom: '',
    releaseDateTo: '',
};

export const createReleaseDateSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ReleaseDateSlice
> = (set) => ({
    ...releaseDateSliceInitialState,
    setReleaseDateFrom: (releaseDateFrom) =>
        set(
            () => ({
                releaseDateFrom,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateFrom',
        ),
    setReleaseDateTo: (releaseDateTo) =>
        set(
            () => ({
                releaseDateTo,
            }),
            false,
            'CatalogFiltersStore/setReleaseDateTo',
        ),
});
