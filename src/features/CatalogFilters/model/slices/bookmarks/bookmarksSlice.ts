import { CatalogFilterInitialState, CatalogFilterSlice } from '../../types';
import { BookmarksType } from '@/shared/kernel/manga';

export type BookmarksSlice = {
    bookmarks: BookmarksType[];
    setBookmarks: (bookmarks: BookmarksType[]) => void;
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
