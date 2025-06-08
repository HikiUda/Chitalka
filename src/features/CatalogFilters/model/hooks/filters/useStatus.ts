import { useCallback, useMemo } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { CheckboxType } from '../../../ui/CheckboxGroup';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { MangaStatus, MangaStatusType } from '@/shared/kernel/manga';

export function useStatus() {
    const { setSearchParam } = useUrlSearchParams();
    const status = useCatalogFiltersStore.use.status();
    const setStatus = useCatalogFiltersStore.use.setStatus();

    const handleSetStatus = useCallback(
        (status: MangaStatusType[]) => {
            setStatus(status);
            setSearchParam('status', status.join(','));
        },
        [setStatus, setSearchParam],
    );

    const checkboxes: CheckboxType<MangaStatusType>[] = useMemo(() => {
        return Object.values(MangaStatus).map((status) => ({
            value: status,
            label: status,
        }));
    }, []);

    return {
        values: status,
        onValuesChange: handleSetStatus,
        checkboxes,
    };
}
