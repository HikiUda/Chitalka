import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface ChapterCountSlice {
    chapterCountFrom: number;
    chapterCountTo: number;
    setChapterCountFrom: (chapterCountFrom: number) => void;
    setChapterCountTo: (chapterCountTo: number) => void;
}

export const chapterCountSliceInitialState: Pick<
    ChapterCountSlice,
    'chapterCountFrom' | 'chapterCountTo'
> = {
    chapterCountFrom: NaN,
    chapterCountTo: NaN,
};
export const createChapterCountSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ChapterCountSlice
> = (set) => ({
    ...chapterCountSliceInitialState,
    setChapterCountFrom: (chapterCountFrom) =>
        set(
            () => ({
                chapterCountFrom,
            }),
            false,
            'CatalogFiltersStore/setChapterCountFrom',
        ),
    setChapterCountTo: (chapterCountTo) =>
        set(
            () => ({
                chapterCountTo,
            }),
            false,
            'CatalogFiltersStore/setChapterCountTo',
        ),
});
