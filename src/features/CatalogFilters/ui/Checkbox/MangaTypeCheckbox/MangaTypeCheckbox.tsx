import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@/shared/ui/Checkbox';
import { HStack } from '@/shared/ui/Stack';
import { MangaType, MangaTypeType } from '@/shared/kernel/manga';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
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
