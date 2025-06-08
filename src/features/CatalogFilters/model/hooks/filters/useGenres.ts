import { useCallback, useMemo, useState } from 'react';
import { useGetGenres } from '../api/useGetGenres';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { CategoryCheckboxType } from '../../../ui/Categories/CategoryCheckboxGroup';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export function useGenres() {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetGenres(search);

    const { setSearchParam } = useUrlSearchParams();

    const genres = useCatalogFiltersStore.use.genres();
    const notGenres = useCatalogFiltersStore.use.notGenres();
    const setGenres = useCatalogFiltersStore.use.setGenres();
    const setNotGenres = useCatalogFiltersStore.use.setNotGenres();
    const resetGenres = useCatalogFiltersStore.use.resetGenres();

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
