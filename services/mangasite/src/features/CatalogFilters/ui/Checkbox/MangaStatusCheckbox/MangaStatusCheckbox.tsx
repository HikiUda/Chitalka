import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@packages/ui/src/shared/Checkbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { MangaStatus } from '@packages/model/src/entities/manga';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';

interface MangaStatusCheckboxProps {
    className?: string;
}

export const MangaStatusCheckbox: FC<MangaStatusCheckboxProps> = (props) => {
    const { className } = props;
    const status = useCatalogFiltersStore.use.status();
    const setStatus = useCatalogFiltersStore.use.setStatus();

    return (
        <CheckboxGroup
            value={status}
            onChange={setStatus}
            label="Статус тайтла"
            className={className}
            aria-label="manga status"
        >
            <HStack gap="16" justify="start" wrap="wrap">
                {Object.values(MangaStatus).map((status) => (
                    <Checkbox key={status} value={status}>
                        {status}
                    </Checkbox>
                ))}
            </HStack>
        </CheckboxGroup>
    );
};
