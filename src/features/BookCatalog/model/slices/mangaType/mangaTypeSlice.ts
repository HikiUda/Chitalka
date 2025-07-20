import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { MangaType } from '@/shared/kernel/book/mangaTypes';

export type MangaTypeSlice = {
    type: MangaType[];
    setType: (type: MangaType[]) => void;
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
