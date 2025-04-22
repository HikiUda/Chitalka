import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { TriStateCheckboxGroup } from '@packages/ui/src/shared/TriStateCheckbox';
import { Button } from '@packages/ui/src/shared/Button';
import { Divider } from '@packages/ui/src/shared/Divider';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { NavButtons } from '../NavButtons/NavButtons';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import cls from './GenresList.module.scss';

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
    const setGenres = useCatalogFiltersStore.use.setGenres();
    const setNotGenres = useCatalogFiltersStore.use.setNotGenres();
    const resetGenres = useCatalogFiltersStore.use.resetGenres();

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
            <NavButtons title="Жанры" onBack={onBack} onReset={resetGenres} />
            <Divider />
            <TriStateCheckboxGroup
                include={genres}
                exclude={notGenres}
                onChangeInclude={handleSetGenres}
                onChangeExclude={handleSetNotGenres}
            >
                <CategoriesList
                    categories={[
                        { id: 1, title: 'Romantic' },
                        { id: 2, title: 'Horror' },
                    ]}
                />
            </TriStateCheckboxGroup>
            <Button slot="close" onPress={onApply} theme="fill" max>
                Применить
            </Button>
        </VStack>
    );
};
