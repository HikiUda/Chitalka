import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { DatePicker } from '@packages/ui/src/shared/DatePicker';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
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
        <VStack>
            <Heading>Дата релиза</Heading>
            <HStack className={classNames(cls.ReleaseDateRange, {}, [className])}>
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
        </VStack>
    );
};
