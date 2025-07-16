import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { BookmarksSlice } from './bookmarksSlice';
import { Bookmarks, Bookmarks } from '@/shared/kernel/book';

export function useBookmarks(slice: CatalogFilterSliceSelector<BookmarksSlice>) {
    const bookmarks = slice.bookmarks();
    const setBookmarks = slice.setBookmarks();

    const checkboxes: CheckboxType<Bookmarks>[] = useMemo(() => {
        return Object.values(Bookmarks).map((bookmark) => ({
            value: bookmark,
            label: bookmark,
        }));
    }, []);

    return {
        values: bookmarks,
        onValuesChange: setBookmarks,
        checkboxes,
    };
}
