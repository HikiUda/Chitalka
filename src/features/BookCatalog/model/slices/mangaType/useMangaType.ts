import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { MangaTypeSlice } from './mangaTypeSlice';
import { MangaType } from '@/shared/kernel/book/mangaTypes';

export function useMangaType(slice: CatalogFilterSliceSelector<MangaTypeSlice>) {
    const type = slice.type();
    const setType = slice.setType();

    const checkboxes: CheckboxType<MangaType>[] = useMemo(() => {
        return Object.values(MangaType).map((type) => ({
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
