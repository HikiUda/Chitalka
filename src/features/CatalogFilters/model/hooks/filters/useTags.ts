import { useCallback, useMemo, useState } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { CategoryCheckboxType } from '../../../ui/Categories/CategoryCheckboxGroup';
import { useGetTags } from '../api/useGetTags';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export function useTags() {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetTags(search);

    const { setSearchParam } = useUrlSearchParams();

    const tags = useCatalogFiltersStore.use.tags();
    const notTags = useCatalogFiltersStore.use.notTags();
    const setTags = useCatalogFiltersStore.use.setTags();
    const setNotTags = useCatalogFiltersStore.use.setNotTags();
    const resetTags = useCatalogFiltersStore.use.resetTags();

    const goSearch = useDebounce(() => refetch(), 500);

    const handleSetSearch = useCallback(
        (value: string) => {
            setSearch(value);
            goSearch();
        },
        [goSearch, setSearch],
    );

    const handleSetTags = useCallback(
        (arr: number[]) => {
            setTags(arr);
            setSearchParam('tags', arr.join(','));
        },
        [setTags, setSearchParam],
    );

    const handleSetNotTags = useCallback(
        (arr: number[]) => {
            setNotTags(arr);
            setSearchParam('notTags', arr.join(','));
        },
        [setNotTags, setSearchParam],
    );

    const checkboxes: CategoryCheckboxType<number>[] = useMemo(() => {
        return data.map((tag) => ({ label: tag.title, value: tag.id }));
    }, [data]);

    return {
        checkboxes,
        tags,
        notTags,
        setTags: handleSetTags,
        setNotTags: handleSetNotTags,
        resetTags,
        search,
        setSearch: handleSetSearch,
    };
}
