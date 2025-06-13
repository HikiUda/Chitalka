import { useCallback } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { ChapterCountSlice } from './chapterCountSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useChapterCount(slice: CatalogFilterSliceSelector<ChapterCountSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const chapterCountFrom = slice.chapterCountFrom();
    const setChapterCountFrom = slice.setChapterCountFrom();
    const chapterCountTo = slice.chapterCountTo();
    const setChapterCountTo = slice.setChapterCountTo();

    const handleSetChapterCountFrom = useCallback(
        (chapterCount: number) => {
            setChapterCountFrom(chapterCount);
            setSearchParam('chapterCountFrom', String(chapterCount));
        },
        [setChapterCountFrom, setSearchParam],
    );
    const handleSetChapterCountTo = useCallback(
        (chapterCount: number) => {
            setChapterCountTo(chapterCount);
            setSearchParam('chapterCountTo', String(chapterCount));
        },
        [setChapterCountTo, setSearchParam],
    );

    return {
        from: chapterCountFrom,
        to: chapterCountTo,
        setFrom: handleSetChapterCountFrom,
        setTo: handleSetChapterCountTo,
    };
}
