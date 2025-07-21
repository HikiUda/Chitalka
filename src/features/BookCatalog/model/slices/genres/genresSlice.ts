import { CatalogFilterInitialState, CatalogFilterSlice } from '../../helpers/types';

export type GenresSlice = {
    genres: number[];
    notGenres: number[];
    setGenres: (genres: number[]) => void;
    setNotGenres: (notGenres: number[]) => void;
    resetGenres: () => void;
};

export const genresSliceInitialState: CatalogFilterInitialState<GenresSlice> = {
    genres: [],
    notGenres: [],
};

export const createGenresSlice: CatalogFilterSlice<GenresSlice> = (storeName) => (set) => ({
    ...genresSliceInitialState,
    setGenres: (genres) => set(() => ({ genres }), false, `${storeName}/setGenres`),
    setNotGenres: (notGenres) => set(() => ({ notGenres }), false, `${storeName}/setNotGenres`),
    resetGenres: () => set(() => genresSliceInitialState, false, `${storeName}/resetGenres`),
});
