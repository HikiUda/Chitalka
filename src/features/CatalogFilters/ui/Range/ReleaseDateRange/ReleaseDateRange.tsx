import { FC } from 'react';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import cls from './ReleaseDateRange.module.scss';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { DatePicker, DateValue } from '@/shared/deprecate-ui/DatePicker';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

interface ReleaseDateRangeProps {
    className?: string;
}

export const ReleaseDateRange: FC<ReleaseDateRangeProps> = (props) => {
    const { className } = props;

    const { setSearchParam } = useUrlSearchParams();
    const releaseDateFrom = useCatalogFiltersStore.use.releaseDateFrom();
    const setReleaseDateFrom = useCatalogFiltersStore.use.setReleaseDateFrom();
    const releaseDateTo = useCatalogFiltersStore.use.releaseDateTo();
    const setReleaseDateTo = useCatalogFiltersStore.use.setReleaseDateTo();

    const handleSetReleaseDateFrom = (date: DateValue | null) => {
        setReleaseDateFrom(date);
        setSearchParam('releaseDateFrom', date === null ? String(date) : date.toString());
    };
    const handleSetReleaseDateTo = (date: DateValue | null) => {
        setReleaseDateTo(date);
        setSearchParam('releaseDateTo', date === null ? String(date) : date.toString());
    };
    return (
        <RangeWrapper title="Дата релиза">
            <HStack className={className}>
                <DatePicker
                    aria-label="releaseDateFrom"
                    value={releaseDateFrom}
                    onChange={handleSetReleaseDateFrom}
                />
                <span className={cls.divider} />
                <DatePicker
                    aria-label="releaseDateTo"
                    value={releaseDateTo}
                    onChange={handleSetReleaseDateTo}
                />
            </HStack>
        </RangeWrapper>
    );
};
