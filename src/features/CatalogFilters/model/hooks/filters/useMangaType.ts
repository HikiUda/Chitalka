import { useCallback, useMemo } from 'react';
import { useCatalogFiltersStore } from '../../store/catalogFiltersStore';
import { CheckboxType } from '../../../ui/CheckboxGroup';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';
import { MangaType, MangaTypeType } from '@/shared/kernel/manga';

export function useMangaType() {
    const { setSearchParam } = useUrlSearchParams();
    const type = useCatalogFiltersStore.use.type();
    const setType = useCatalogFiltersStore.use.setType();

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
