import { useCallback, useMemo, useState } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CategoryCheckboxType } from '../../../ui/filters-build-blocks/CategoryCheckboxGroup';
import { GenresSlice } from './genresSlice';
import { useGetGenres } from './useGetGenres';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export function useGenres(slice: CatalogFilterSliceSelector<GenresSlice>) {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetGenres(search);

    const { setSearchParam } = useUrlSearchParams();

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

    const handleSetGenres = useCallback(
        (arr: number[]) => {
            setGenres(arr);
            setSearchParam('genres', arr.join(','));
        },
        [setGenres, setSearchParam],
    );

    const handleSetNotGenres = useCallback(
        (arr: number[]) => {
            setNotGenres(arr);
            setSearchParam('notGenres', arr.join(','));
        },
        [setNotGenres, setSearchParam],
    );

    const checkboxes: CategoryCheckboxType<number>[] = useMemo(() => {
        return data.map((genre) => ({ label: genre.title, value: genre.id }));
    }, [data]);

    return {
        checkboxes,
        genres,
        notGenres,
        setGenres: handleSetGenres,
        setNotGenres: handleSetNotGenres,
        resetGenres,
        search,
        setSearch: handleSetSearch,
    };
}
