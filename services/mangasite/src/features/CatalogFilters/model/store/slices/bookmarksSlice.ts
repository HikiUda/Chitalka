import { StateCreator } from 'zustand';
import { BookmarksSlice, CatalogFiltersStoreType } from '../../types/catalogFilters';
import { checkBoxArray } from '../../helpers/checkBoxArray';

export const createBookmarksSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    BookmarksSlice
> = (set) => ({
    bookmarks: [],
    setBookmarks: (b) =>
        set(
            (state) => ({
                bookmarks: checkBoxArray(state.bookmarks, b),
            }),
            false,
            'CatalogFiltersStore/setBookmarks',
        ),
});
