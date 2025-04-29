import { FC, useCallback } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { TriStateCheckboxGroup } from '@packages/ui/src/shared/TriStateCheckbox';
import { Button } from '@packages/ui/src/shared/Button';
import { Divider } from '@packages/ui/src/shared/Divider';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@packages/ui/src/shared/Input';
import { useDebounce } from '@packages/model/src/lib/hooks/useDebounce/useDebounce';
import { NavButtons } from '../NavButtons/NavButtons';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import cls from './GenresList.module.scss';
import { CategoriesApi } from '@/shared/api/categoriesApi';

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
