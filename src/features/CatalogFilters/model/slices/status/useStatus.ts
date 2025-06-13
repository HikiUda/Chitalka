import { useCallback, useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { StatusSlice } from './statusSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { MangaStatus, MangaStatusType } from '@/shared/kernel/manga';

export function useStatus(slice: CatalogFilterSliceSelector<StatusSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const status = slice.status();
    const setStatus = slice.setStatus();

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
