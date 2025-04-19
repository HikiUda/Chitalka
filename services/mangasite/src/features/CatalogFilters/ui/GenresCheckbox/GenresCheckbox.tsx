import { FC } from 'react';
import { TriStateCheckbox, TriStateCheckboxGroup } from '@packages/ui/src/shared/TriStateCheckbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';

interface GenresCheckboxProps {
    className?: string;
}

export const GenresCheckbox: FC<GenresCheckboxProps> = (props) => {
    const { className } = props;

    const genres = useCatalogFiltersStore.use.genres();
    const notGenres = useCatalogFiltersStore.use.notGenres();
    const setGenres = useCatalogFiltersStore.use.setGenres();
    const setNotGenres = useCatalogFiltersStore.use.setNotGenres();

    return (
        <TriStateCheckboxGroup
            include={genres}
            exclude={notGenres}
            onChangeInclude={setGenres}
            onChangeExclude={setNotGenres}
            className={className}
        >
            <HStack gap="16" justify="start" wrap="wrap">
                <TriStateCheckbox value={1} label="1" />
                <TriStateCheckbox value={2} label="2" />
            </HStack>
        </TriStateCheckboxGroup>
    );
};
