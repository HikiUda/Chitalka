import { useCallback, useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { MangaTypeSlice } from './mangaTypeSlice';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { MangaType, MangaTypeType } from '@/shared/kernel/manga';

export function useMangaType(slice: CatalogFilterSliceSelector<MangaTypeSlice>) {
    const { setSearchParam } = useUrlSearchParams();
    const type = slice.type();
    const setType = slice.setType();

    const handleSetType = useCallback(
        (type: MangaTypeType[]) => {
            setType(type);
            setSearchParam('type', type.join(','));
        },
        [setType, setSearchParam],
    );

    const checkboxes: CheckboxType<MangaTypeType>[] = useMemo(() => {
        return Object.values(MangaType).map((type) => ({
            value: type,
            label: type,
        }));
    }, []);

    return {
        values: type,
        onValuesChange: handleSetType,
        checkboxes,
    };
}
