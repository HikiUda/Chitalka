import { StateCreator } from 'zustand';
import { CatalogFiltersStoreType } from '../catalogFiltersStroe.type';

export interface GenresSlice {
    genres: number[];
    notGenres: number[];
    setGenres: (genres: number[]) => void;
    setNotGenres: (notGenres: number[]) => void;
    resetGenres: () => void;
}

export const genresSliceInitialState: Pick<GenresSlice, 'genres' | 'notGenres'> = {
    genres: [],
    notGenres: [],
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
    resetGenres: () => set(() => genresSliceInitialState, false, 'CatalogFiltersStore/resetGenres'),
});
