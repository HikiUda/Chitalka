import { useCallback, useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { BookmarksSlice } from './bookmarksSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { Bookmarks, BookmarksType } from '@/shared/kernel/manga';

export function useBookmarks(slice: CatalogFilterSliceSelector<BookmarksSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const bookmarks = slice.bookmarks();
    const setBookmarks = slice.setBookmarks();

    const handleSetBookmarks = useCallback(
        (bookmarks: BookmarksType[]) => {
            setBookmarks(bookmarks);
            setSearchParam('bookmarks', bookmarks.join(','));
        },
        [setBookmarks, setSearchParam],
    );

    const checkboxes: CheckboxType<BookmarksType>[] = useMemo(() => {
        return Object.values(Bookmarks).map((bookmark) => ({
            value: bookmark,
            label: bookmark,
        }));
    }, []);

    return {
        values: bookmarks,
        onValuesChange: handleSetBookmarks,
        checkboxes,
    };
}
