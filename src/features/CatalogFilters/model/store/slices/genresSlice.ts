import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface GenresSlice {
    genres: number[];
    notGenres: number[];
    searchGenres: string;
    setGenres: (genres: number[]) => void;
    setNotGenres: (notGenres: number[]) => void;
    setSearchGenres: (searchGenres: string) => void;
    resetGenres: () => void;
}

export const genresSliceInitialState: Pick<GenresSlice, 'genres' | 'notGenres' | 'searchGenres'> = {
    genres: [],
    notGenres: [],
    searchGenres: '',
};

export const createGenresSlice: StateCreator<
    CatalogFiltersStoreType,
    [['zustand/devtools', never]],
    [],
    GenresSlice
> = (set) => ({
    ...genresSliceInitialState,
    setGenres: (genres) => set(() => ({ genres }), false, 'CatalogFiltersStore/setGenres'),
    setNotGenres: (notGenres) =>
        set(() => ({ notGenres }), false, 'CatalogFiltersStore/setNotGenres'),
    setSearchGenres: (searchGenres) =>
        set(() => ({ searchGenres }), false, 'CatalogFiltersStore/setSearchGenres'),
    resetGenres: () => set(() => genresSliceInitialState, false, 'CatalogFiltersStore/resetGenres'),
});
