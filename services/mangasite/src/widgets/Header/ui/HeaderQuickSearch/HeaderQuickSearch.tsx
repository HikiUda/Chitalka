import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { HeaderLayout } from '@packages/ui/src/layout/HeaderLayout';
import cls from './HeaderQuickSearch.module.scss';
import { QuickSearchModal } from '@/features/QuickSearchModal';

interface HeaderQuickSearchProps {
    className?: string;
}

export const HeaderQuickSearch: FC<HeaderQuickSearchProps> = (props) => {
    const { className } = props;

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            <HStack max className={classNames(cls.HeaderQuickSearch, {}, [className])}>
                <QuickSearchModal />
            </HStack>
        </HeaderLayout>
    );
};
