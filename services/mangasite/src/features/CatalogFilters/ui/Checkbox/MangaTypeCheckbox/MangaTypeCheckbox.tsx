import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@packages/ui/src/shared/Checkbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaType, MangaTypeType } from '@packages/model/src/entities/manga';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';

interface MangaTypeCheckboxProps {
    className?: string;
}

export const MangaTypeCheckbox: FC<MangaTypeCheckboxProps> = (props) => {
    const { className } = props;
    const { setSearchParam } = useUrlSearchParams();
    const type = useCatalogFiltersStore.use.type();
    const setType = useCatalogFiltersStore.use.setType();

    const handleSetType = (types: MangaTypeType[]) => {
        setType(types);
        setSearchParam('type', types.join(','));
    };

    return (
        <CheckboxGroup
            value={type}
            onChange={handleSetType}
            label="Тип тайтла"
            className={className}
            aria-label="manga types"
        >
            <HStack gap="16" justify="start" wrap="wrap">
                {Object.values(MangaType).map((type) => (
                    <Checkbox key={type} value={type}>
                        {type}
                    </Checkbox>
                ))}
            </HStack>
        </CheckboxGroup>
    );
};
