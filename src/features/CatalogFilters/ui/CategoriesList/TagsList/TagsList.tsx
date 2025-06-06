import { FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/deprecate-ui/Stack';
import { TriStateCheckboxGroup } from '@/shared/deprecate-ui/TriStateCheckbox';
import { Divider } from '@/shared/deprecate-ui/Divider';
import { Button } from '@/shared/deprecate-ui/Button';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/shared/deprecate-ui/Input';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { NavButtons } from '../NavButtons/NavButtons';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import cls from './TagsList.module.scss';
import { CategoriesApi } from '@/shared/api/deprecated/categoriesApi';

interface TagsListProps {
    className?: string;
    onBack?: () => void;
    onApply?: () => void;
}

export const TagsList: FC<TagsListProps> = (props) => {
    const { className, onApply, onBack } = props;

    const { setSearchParam } = useUrlSearchParams();

    const tags = useCatalogFiltersStore.use.tags();
    const notTags = useCatalogFiltersStore.use.notTags();
    const searchTags = useCatalogFiltersStore.use.searchTags();
    const setTags = useCatalogFiltersStore.use.setTags();
    const setNotTags = useCatalogFiltersStore.use.setNotTags();
    const setSearchTags = useCatalogFiltersStore.use.setSearchTags();
    const resetTags = useCatalogFiltersStore.use.resetTags();

    const { data, isLoading, refetch } = useQuery(CategoriesApi.getTagsQueryOptions(searchTags));

    const goSearch = useDebounce(() => refetch(), 500);

    const handleSetSerachTags = useCallback(
        (value: string) => {
            setSearchTags(value);
            goSearch();
        },
        [goSearch, setSearchTags],
    );
    const handleReset = useCallback(() => {
        resetTags();
        goSearch();
    }, [goSearch, resetTags]);

    const handleSetTags = (arr: number[]) => {
        setTags(arr);
        setSearchParam('tags', arr.join(','));
    };
    const handleSetNotTags = (arr: number[]) => {
        setNotTags(arr);
        setSearchParam('notTags', arr.join(','));
    };

    return (
        <VStack justify="start" className={classNames(cls.TagsList, {}, [className])}>
            <NavButtons title="Теги" onBack={onBack} onReset={handleReset} />
            <Divider />
            <Input placeholder="Поиск тегов" value={searchTags} onChange={handleSetSerachTags} />
            <Divider />
            <TriStateCheckboxGroup
                include={tags}
                exclude={notTags}
                onChangeInclude={handleSetTags}
                onChangeExclude={handleSetNotTags}
            >
                <CategoriesList categories={data || []} isLoading={isLoading} />
            </TriStateCheckboxGroup>
            <Button slot="close" onPress={onApply} theme="fill" max>
                Применить
            </Button>
        </VStack>
    );
};
