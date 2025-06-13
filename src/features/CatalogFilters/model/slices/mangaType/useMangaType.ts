import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { MangaTypeSlice } from './mangaTypeSlice';
import { MangaType, MangaTypeType } from '@/shared/kernel/manga';

export function useMangaType(slice: CatalogFilterSliceSelector<MangaTypeSlice>) {
    const type = slice.type();
    const setType = slice.setType();

    const checkboxes: CheckboxType<MangaTypeType>[] = useMemo(() => {
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
