import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { fromNoBiggerTo } from '../../helpers/fromNoBiggerTo';
import { toNoLessFrom } from '../../helpers/toNoLessFrom';

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
