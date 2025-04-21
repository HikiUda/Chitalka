import { FC } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { DatePicker } from '@packages/ui/src/shared/DatePicker';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import { RangeWrapper } from '../RangeWrapper/RangeWrapper';
import cls from './ReleaseDateRange.module.scss';

interface ReleaseDateRangeProps {
    className?: string;
}

export const ReleaseDateRange: FC<ReleaseDateRangeProps> = (props) => {
    const { className } = props;
    const releaseDateFrom = useCatalogFiltersStore.use.releaseDateFrom();
    const setReleaseDateFrom = useCatalogFiltersStore.use.setReleaseDateFrom();
    const releaseDateTo = useCatalogFiltersStore.use.releaseDateTo();
    const setReleaseDateTo = useCatalogFiltersStore.use.setReleaseDateTo();
    return (
        <RangeWrapper title="Дата релиза">
            <HStack className={className}>
                <DatePicker
                    aria-label="releaseDateFrom"
                    value={releaseDateFrom}
                    onChange={setReleaseDateFrom}
                />
                <span className={cls.divider} />
                <DatePicker
                    aria-label="releaseDateTo"
                    value={releaseDateTo}
                    onChange={setReleaseDateTo}
                />
            </HStack>
        </RangeWrapper>
    );
};
