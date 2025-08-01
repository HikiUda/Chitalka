import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';
import { Bookmarks } from '@/shared/kernel/book/bookmarks';

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
