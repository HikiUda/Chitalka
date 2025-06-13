import { useCallback, useMemo, useState } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CategoryCheckboxType } from '../../../ui/filters-build-blocks/CategoryCheckboxGroup';
import { GenresSlice } from './genresSlice';
import { useGetGenres } from './useGetGenres';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export function useGenres(slice: CatalogFilterSliceSelector<GenresSlice>) {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetGenres(search);

    const genres = slice.genres();
    const notGenres = slice.notGenres();
    const setGenres = slice.setGenres();
    const setNotGenres = slice.setNotGenres();
    const resetGenres = slice.resetGenres();

    const goSearch = useDebounce(() => refetch(), 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            goSearch();
        },
        [goSearch, setSearch],
    );

    const checkboxes: CategoryCheckboxType<number>[] = useMemo(() => {
        return data.map((genre) => ({ label: genre.title, value: genre.id }));
    }, [data]);

    return {
        checkboxes,
        genres,
        notGenres,
        setGenres,
        setNotGenres,
        resetGenres,
        search,
        setSearch: handleSetSearch,
    };
}
