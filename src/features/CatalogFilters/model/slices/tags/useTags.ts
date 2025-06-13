import { useCallback, useMemo, useState } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CategoryCheckboxType } from '../../../ui/filters-build-blocks/CategoryCheckboxGroup';
import { TagsSlice } from './tagsSlice';
import { useGetTags } from './useGetTags';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export function useTags(slice: CatalogFilterSliceSelector<TagsSlice>) {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetTags(search);

    const { setSearchParam } = useUrlSearchParams();

    const tags = slice.tags();
    const notTags = slice.notTags();
    const setTags = slice.setTags();
    const setNotTags = slice.setNotTags();
    const resetTags = slice.resetTags();

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
