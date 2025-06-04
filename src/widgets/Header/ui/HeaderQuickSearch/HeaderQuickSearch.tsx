import { FC } from 'react';
import cls from './HeaderQuickSearch.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { HeaderLayout } from '@/shared/layout/HeaderLayout';
import { QuickSearch } from '@/features/QuickSearch';

interface HeaderQuickSearchProps {
    className?: string;
}

export const HeaderQuickSearch: FC<HeaderQuickSearchProps> = (props) => {
    const { className } = props;

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            <HStack max className={classNames(cls.HeaderQuickSearch, {}, [className])}>
                <QuickSearch />
            </HStack>
        </HeaderLayout>
    );
};
