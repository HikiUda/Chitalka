import { useCallback, useMemo, useState } from 'react';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { CategoryCheckboxType } from '../../../ui/filters-build-blocks/CategoryCheckboxGroup';
import { TagsSlice } from './tagsSlice';
import { useGetTags } from './useGetTags';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

export function useTags(slice: CatalogFilterSliceSelector<TagsSlice>) {
    const [search, setSearch] = useState('');
    const { data, refetch } = useGetTags(search);

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

    const checkboxes: CategoryCheckboxType<number>[] = useMemo(() => {
        return data.map((tag) => ({ label: tag.title, value: tag.id }));
    }, [data]);

    return {
        tags: {
            checkboxes,
            include: tags,
            exclude: notTags,
            onChangeInclude: setTags,
            onChangeExclude: setNotTags,
        },
        resetTags,
        searchTags: {
            value: search,
            onChangeValue: handleSetSearch,
        },
    };
}
