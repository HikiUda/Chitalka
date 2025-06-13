import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { MangaTypeType } from '@/shared/kernel/manga';

export type MangaTypeSlice = {
    type: MangaTypeType[];
    setType: (type: MangaTypeType[]) => void;
};

export const mangaTypeSliceInitialState: CatalogFilterInitialState<MangaTypeSlice> = {
    type: [],
};

export const createMangaTypeSlice: CatalogFilterSlice<MangaTypeSlice> = (storeName) => (set) => ({
    ...mangaTypeSliceInitialState,
    setType: (type) =>
        set(
            () => ({
                type,
            }),
            false,
            `${storeName}/setType`,
        ),
});
