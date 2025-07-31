import { useMemo } from 'react';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { StatusSlice } from './statusSlice';
import { BookStatus } from '@/shared/kernel/book/bookStatus';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({});

export function useStatus(slice: CatalogFilterSliceSelector<StatusSlice>) {
    const status = slice.status();
    const setStatus = slice.setStatus();
    const t = useI18n();

    const checkboxes: CheckboxType<BookStatus>[] = useMemo(() => {
        return Object.values(BookStatus).map((status) => ({
            value: status,
            label: t(`bookStatus.${status}`),
        }));
    }, [t]);

    return {
        values: status,
        onValuesChange: setStatus,
        checkboxes,
    };
}
