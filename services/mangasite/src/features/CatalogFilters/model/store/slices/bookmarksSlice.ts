import { StateCreator } from 'zustand';
import { BookmarksSlice, CatalogFiltersStoreType } from '../../types/catalogFilters';

export const createBookmarksSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    BookmarksSlice
> = (set) => ({
    bookmarks: [],
    setBookmarks: (bookmarks) =>
        set(
            () => ({
                bookmarks,
            }),
            false,
            'CatalogFiltersStore/setBookmarks',
        ),
});
