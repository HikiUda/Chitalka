import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../types';
import { StatusSlice } from './statusSlice';
import { BookStatus, BookStatusType } from '@/shared/kernel/book';

export function useStatus(slice: CatalogFilterSliceSelector<StatusSlice>) {
    const status = slice.status();
    const setStatus = slice.setStatus();

    const checkboxes: CheckboxType<BookStatusType>[] = useMemo(() => {
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
