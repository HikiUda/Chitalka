import { useCallback } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useChapterCount() {
    const { setSearchParam } = useUrlSearchParams();
    const chapterCountFrom = useCatalogFiltersStore.use.chapterCountFrom();
    const setChapterCountFrom = useCatalogFiltersStore.use.setChapterCountFrom();
    const chapterCountTo = useCatalogFiltersStore.use.chapterCountTo();
    const setChapterCountTo = useCatalogFiltersStore.use.setChapterCountTo();

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
