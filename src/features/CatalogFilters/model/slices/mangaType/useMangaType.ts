import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { MangaTypeSlice } from './mangaTypeSlice';
import { MangaType, MangaType } from '@/shared/kernel/book';

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
