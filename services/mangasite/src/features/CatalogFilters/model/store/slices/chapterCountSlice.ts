import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, ChapterCountSlice } from '../../types/catalogFilters';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

export const createChapterCountSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    ChapterCountSlice
> = (set) => ({
    chapterCountFrom: NaN,
    chapterCountTo: NaN,
    setChapterCountFrom: (chapterCountFrom) =>
        set(
            (state) => ({
                chapterCountFrom: fromNoBiggerTo(chapterCountFrom, state.chapterCountTo),
            }),
            false,
            'CatalogFiltersStore/setChapterCountFrom',
        ),
    setChapterCountTo: (chapterCountTo) =>
        set(
            (state) => ({
                chapterCountTo: toNoLessFrom(state.chapterCountFrom, chapterCountTo),
            }),
            false,
            'CatalogFiltersStore/setChapterCountTo',
        ),
});
