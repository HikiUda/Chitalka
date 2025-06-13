import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { StatusSlice } from './statusSlice';
import { MangaStatus, MangaStatusType } from '@/shared/kernel/manga';

export function useStatus(slice: CatalogFilterSliceSelector<StatusSlice>) {
    const status = slice.status();
    const setStatus = slice.setStatus();

    const checkboxes: CheckboxType<MangaStatusType>[] = useMemo(() => {
        return Object.values(MangaStatus).map((status) => ({
            value: status,
            label: status,
        }));
    }, []);

    return {
        values: status,
        onValuesChange: setStatus,
        checkboxes,
    };
}
