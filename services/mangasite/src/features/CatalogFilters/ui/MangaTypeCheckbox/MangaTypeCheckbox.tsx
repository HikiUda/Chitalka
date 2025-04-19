import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@packages/ui/src/shared/Checkbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaType } from '@packages/model/src/entities/manga';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';

interface MangaTypeCheckboxProps {
    className?: string;
}

export const MangaTypeCheckbox: FC<MangaTypeCheckboxProps> = (props) => {
    const { className } = props;

    const type = useCatalogFiltersStore.use.type();
    const setType = useCatalogFiltersStore.use.setType();

    return (
        <CheckboxGroup value={type} onChange={setType} label="Тип тайтла" className={className}>
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
