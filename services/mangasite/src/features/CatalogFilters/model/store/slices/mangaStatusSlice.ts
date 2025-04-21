import { StateCreator } from 'zustand';
import { MangaStatusType } from '@packages/model/src/entities/manga';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface MangaStatusSlice {
    status: MangaStatusType[];
    setStatus: (status: MangaStatusType[]) => void;
}

export const mangaStatusSliceInitialState: Pick<MangaStatusSlice, 'status'> = {
    status: [],
};

export const createMangaStatusSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaStatusSlice
> = (set) => ({
    ...mangaStatusSliceInitialState,
    setStatus: (status) =>
        set(
            () => ({
                status,
            }),
            false,
            'CatalogFiltersStore/setStatus',
        ),
});
