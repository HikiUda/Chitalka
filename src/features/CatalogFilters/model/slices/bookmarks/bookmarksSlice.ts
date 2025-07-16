import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { Bookmarks } from '@/shared/kernel/book';

export type BookmarksSlice = {
    bookmarks: Bookmarks[];
    setBookmarks: (bookmarks: Bookmarks[]) => void;
};

export const bookmarksSliceInitialState: CatalogFilterInitialState<BookmarksSlice> = {
    bookmarks: [],
};

export const createBookmarksSlice: CatalogFilterSlice<BookmarksSlice> = (storeName) => (set) => ({
    ...bookmarksSliceInitialState,
    setBookmarks: (bookmarks) =>
        set(
            () => ({
                bookmarks,
            }),
            false,
            `${storeName}/setBookmarks`,
        ),
});
