import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { StatusSlice } from './statusSlice';
import { BookStatus } from '@/shared/kernel/book/bookStatus';

export function useStatus(slice: CatalogFilterSliceSelector<StatusSlice>) {
    const status = slice.status();
    const setStatus = slice.setStatus();

    const checkboxes: CheckboxType<BookStatus>[] = useMemo(() => {
        return Object.values(BookStatus).map((status) => ({
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
