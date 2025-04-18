import { FC } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import QuestionSvg from '@packages/ui/src/assets/icon/common/question.svg';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import { LogoMangaSite } from '@/entities/Logo';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { QuickSearchModal } from '@/features/QuickSearchModal';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';

interface HeaderMainContentProps {
    className?: string;
}

export const HeaderMainContent: FC<HeaderMainContentProps> = (props) => {
    const { className } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());

    return (
        <HStack justify="between">
            <LogoMangaSite />
            <HStack>
                <CatalogLink />
                <CollectionLink />
                <QuickSearchModal />
            </HStack>
            <HStack gap="16">
                <Icon Svg={QuestionSvg} width={30} height={30} />
                {data ? <PopUserMenu /> : <AuthModal />}
            </HStack>
        </HStack>
    );
};
