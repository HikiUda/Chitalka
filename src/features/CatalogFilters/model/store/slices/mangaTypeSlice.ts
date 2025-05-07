import { StateCreator } from 'zustand';
import { MangaTypeType } from '@/shared/entities/manga';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface MangaTypeSlice {
    type: MangaTypeType[];
    setType: (type: MangaTypeType[]) => void;
}

export const mangaTypeSliceInitialState: Pick<MangaTypeSlice, 'type'> = {
    type: [],
};

export const createMangaTypeSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    MangaTypeSlice
> = (set) => ({
    ...mangaTypeSliceInitialState,
    setType: (type) =>
        set(
            () => ({
                type,
            }),
            false,
            'CatalogFiltersStore/setType',
        ),
});
