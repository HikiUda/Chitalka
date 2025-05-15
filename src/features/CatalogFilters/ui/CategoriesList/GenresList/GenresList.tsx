import { FC, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NavButtons } from '../NavButtons/NavButtons';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import cls from './GenresList.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { VStack } from '@/shared/deprecate-ui/Stack';
import { TriStateCheckboxGroup } from '@/shared/deprecate-ui/TriStateCheckbox';
import { Button } from '@/shared/deprecate-ui/Button';
import { Divider } from '@/shared/deprecate-ui/Divider';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { Input } from '@/shared/deprecate-ui/Input';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { CategoriesApi } from '@/shared/api/deprecated/categoriesApi';

interface GenresListProps {
    className?: string;
    onBack?: () => void;
    onApply?: () => void;
}

export const GenresList: FC<GenresListProps> = (props) => {
    const { className, onBack, onApply } = props;

    const { setSearchParam } = useUrlSearchParams();

    const genres = useCatalogFiltersStore.use.genres();
    const notGenres = useCatalogFiltersStore.use.notGenres();
    const searchGenres = useCatalogFiltersStore.use.searchGenres();
    const setGenres = useCatalogFiltersStore.use.setGenres();
    const setNotGenres = useCatalogFiltersStore.use.setNotGenres();
    const setSearchGenres = useCatalogFiltersStore.use.setSearchGenres();
    const resetGenres = useCatalogFiltersStore.use.resetGenres();

    const { data, isLoading, refetch } = useQuery(
        CategoriesApi.getGenresQueryOptions(searchGenres),
    );

    const goSearch = useDebounce(() => refetch(), 500);

    const handleSetSerachGenres = useCallback(
        (value: string) => {
            setSearchGenres(value);
            goSearch();
        },
        [goSearch, setSearchGenres],
    );
    const handleReset = useCallback(() => {
        resetGenres();
        goSearch();
    }, [goSearch, resetGenres]);

    const handleSetGenres = (arr: number[]) => {
        setGenres(arr);
        setSearchParam('genres', arr.join(','));
    };
    const handleSetNotGenres = (arr: number[]) => {
        setNotGenres(arr);
        setSearchParam('notGenres', arr.join(','));
    };

    return (
        <VStack justify="start" className={classNames(cls.GenresList, {}, [className])}>
            <NavButtons title="Жанры" onBack={onBack} onReset={handleReset} />
            <Divider />
            <Input
                placeholder="Поиск жанров"
                value={searchGenres}
                onChange={handleSetSerachGenres}
            />
            <Divider />
            <TriStateCheckboxGroup
                include={genres}
                exclude={notGenres}
                onChangeInclude={handleSetGenres}
                onChangeExclude={handleSetNotGenres}
            >
                <CategoriesList categories={data || []} isLoading={isLoading} />
            </TriStateCheckboxGroup>
            <Button slot="close" onPress={onApply} theme="fill" max>
                Применить
            </Button>
        </VStack>
    );
};
