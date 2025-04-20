import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType, GenresSlice } from '../../types/catalogFilters';

export const createGenresSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    GenresSlice
> = (set) => ({
    genres: [],
    notGenres: [],
    setGenres: (genres) => set(() => ({ genres }), false, 'CatalogFiltersStore/setGenres'),
    setNotGenres: (notGenres) =>
        set(() => ({ notGenres }), false, 'CatalogFiltersStore/setNotGenres'),
    resetGenres: () =>
        set(() => ({ genres: [], notGenres: [] }), false, 'CatalogFiltersStore/resetGenres'),
});
