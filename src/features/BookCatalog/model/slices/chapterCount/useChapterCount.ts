import { CatalogFilterSliceSelector } from '../../helpers/types';
import { ChapterCountSlice } from './chapterCountSlice';

export function useChapterCount(slice: CatalogFilterSliceSelector<ChapterCountSlice>) {
    const chapterCountFrom = slice.chapterCountFrom();
    const setChapterCountFrom = slice.setChapterCountFrom();
    const chapterCountTo = slice.chapterCountTo();
    const setChapterCountTo = slice.setChapterCountTo();

    return {
        from: chapterCountFrom,
        to: chapterCountTo,
        setFrom: setChapterCountFrom,
        setTo: setChapterCountTo,
    };
}
