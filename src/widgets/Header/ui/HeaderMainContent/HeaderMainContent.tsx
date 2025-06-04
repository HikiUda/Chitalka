import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import cls from './HeaderMainContent.module.scss';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Icon } from '@/shared/deprecate-ui/Icon';
import QuestionSvg from '@/shared/assets/icon/common/question.svg?react';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { HeaderLayout } from '@/shared/layout/HeaderLayout';
import { classNames } from '@/shared/lib/helpers/classNames';
import { LogoMangaSite } from '@/entities/Logo';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { QuickSearch } from '@/features/QuickSearch';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';

interface HeaderMainContentProps {
    className?: string;
}

export const HeaderMainContent: FC<HeaderMainContentProps> = (props) => {
    const { className } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            <HStack justify="between">
                <LogoMangaSite />
                <HStack>
                    <CatalogLink />
                    <CollectionLink />
                    <QuickSearch />
                </HStack>
                <HStack gap="16">
                    <Icon Svg={QuestionSvg} width={30} height={30} />
                    {data ? <PopUserMenu /> : <AuthModal />}
                </HStack>
            </HStack>
        </HeaderLayout>
    );
};
