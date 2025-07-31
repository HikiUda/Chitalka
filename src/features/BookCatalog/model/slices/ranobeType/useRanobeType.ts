import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { RanobeTypeSlice } from './ranobeTypeSlice';
import { RanobeType } from '@/shared/kernel/book/ranobeType';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({});

export function useRanobeType(slice: CatalogFilterSliceSelector<RanobeTypeSlice>) {
    const type = slice.type();
    const setType = slice.setType();
    const t = useI18n();

    const checkboxes: CheckboxType<RanobeType>[] = useMemo(() => {
        return Object.values(RanobeType).map((type) => ({
            value: type,
            label: t(`ranobeType.${type}`),
        }));
    }, [t]);

    return {
        values: type,
        onValuesChange: setType,
        checkboxes,
    };
}
