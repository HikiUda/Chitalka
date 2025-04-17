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
    switchGenre: (genre, toState) =>
        set(
            (state) => {
                switch (toState) {
                    case 'include':
                        return { genres: state.genres.concat([genre]) };
                    case 'exclude':
                        return {
                            notGenres: state.notGenres.concat([genre]),
                            genres: state.genres.filter((g) => g !== genre),
                        };
                    default:
                        return { notGenres: state.notGenres.filter((g) => g !== genre) };
                }
            },
            false,
            'CatalogFiltersStore/switchGenre',
        ),
});
