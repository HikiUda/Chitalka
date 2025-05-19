import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';
import { BookmarksType } from '@/shared/kernel/manga';

export interface BookmarksSlice {
    bookmarks: BookmarksType[];
    setBookmarks: (bookmarks: BookmarksType[]) => void;
}

export const bookmarksSliceInitialState: Pick<BookmarksSlice, 'bookmarks'> = {
    bookmarks: [],
};
export const createBookmarksSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    BookmarksSlice
> = (set) => ({
    ...bookmarksSliceInitialState,
    setBookmarks: (bookmarks) =>
        set(
            () => ({
                bookmarks,
            }),
            false,
            'CatalogFiltersStore/setBookmarks',
        ),
});
