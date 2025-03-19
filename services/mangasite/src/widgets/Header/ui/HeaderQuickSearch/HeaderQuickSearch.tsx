import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './HeaderQuickSearch.module.scss';
import { QuickSearchModal } from '@/features/QuickSearchModal';

interface HeaderQuickSearchProps {
    className?: string;
}

export const HeaderQuickSearch: FC<HeaderQuickSearchProps> = (props) => {
    const { className } = props;

    return (
        <HStack max className={classNames(cls.HeaderQuickSearch, {}, [className])}>
            <QuickSearchModal />
        </HStack>
    );
};
