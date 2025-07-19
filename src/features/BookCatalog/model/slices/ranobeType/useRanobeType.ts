import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { RanobeTypeSlice } from './ranobeTypeSlice';
import { RanobeType } from '@/shared/kernel/book/ranobeType';

export function useRanobeType(slice: CatalogFilterSliceSelector<RanobeTypeSlice>) {
    const type = slice.type();
    const setType = slice.setType();

    const checkboxes: CheckboxType<RanobeType>[] = useMemo(() => {
        return Object.values(RanobeType).map((type) => ({
            value: type,
            label: type,
        }));
    }, []);

    return {
        values: type,
        onValuesChange: setType,
        checkboxes,
    };
}
