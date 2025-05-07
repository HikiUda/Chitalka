import { FC } from 'react';
import { Checkbox, CheckboxGroup } from '@/shared/ui/Checkbox';
import { HStack } from '@/shared/ui/Stack';
import { MangaStatus, MangaStatusType } from '@/shared/entities/manga';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';

interface MangaStatusCheckboxProps {
    className?: string;
}

export const MangaStatusCheckbox: FC<MangaStatusCheckboxProps> = (props) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();
    const status = useCatalogFiltersStore.use.status();
    const setStatus = useCatalogFiltersStore.use.setStatus();

    const handleSetStatus = (statuses: MangaStatusType[]) => {
        setStatus(statuses);
        setSearchParam('status', statuses.join(','));
    };

    return (
        <CheckboxGroup
            value={status}
            onChange={handleSetStatus}
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
