import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';

export type ChapterCountSlice = {
    chapterCountFrom: number;
    chapterCountTo: number;
    setChapterCountFrom: (chapterCountFrom: number) => void;
    setChapterCountTo: (chapterCountTo: number) => void;
};

export const chapterCountSliceInitialState: CatalogFilterInitialState<ChapterCountSlice> = {
    chapterCountFrom: NaN,
    chapterCountTo: NaN,
};
export const createChapterCountSlice: CatalogFilterSlice<ChapterCountSlice> =
    (storeName) => (set) => ({
        ...chapterCountSliceInitialState,
        setChapterCountFrom: (chapterCountFrom) =>
            set(
                () => ({
                    chapterCountFrom,
                }),
                false,
                `${storeName}/setChapterCountFrom`,
            ),
        setChapterCountTo: (chapterCountTo) =>
            set(
                () => ({
                    chapterCountTo,
                }),
                false,
                `${storeName}/setChapterCountTo`,
            ),
    });
