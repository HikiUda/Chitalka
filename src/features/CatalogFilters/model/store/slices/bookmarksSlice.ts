import { StateCreator } from 'zustand';
import { BookmarksType } from '@/shared/entities/manga';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

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
