import { useMemo } from 'react';
import { CatalogFilterSliceSelector } from '../../helpers/types';
import { CheckboxType } from '../../../ui/filters-build-blocks/CheckboxGroup';
import { MangaTypeSlice } from './mangaTypeSlice';
import { MangaType } from '@/shared/kernel/book/mangaTypes';
import { createI18nModule } from '@/shared/kernel/i18n';

const { useI18n } = createI18nModule({});

export function useMangaType(slice: CatalogFilterSliceSelector<MangaTypeSlice>) {
    const type = slice.type();
    const setType = slice.setType();
    const t = useI18n();

    const checkboxes: CheckboxType<MangaType>[] = useMemo(() => {
        return Object.values(MangaType).map((type) => ({
            value: type,
            label: t(`mangaType.${type}`),
        }));
    }, [t]);

    return {
        values: type,
        onValuesChange: setType,
        checkboxes,
    };
}
