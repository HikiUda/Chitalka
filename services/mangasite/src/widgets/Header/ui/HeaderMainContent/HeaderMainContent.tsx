import { FC } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { LogoMangaSite } from '@packages/ui/src/entities/Logo';
import { Icon } from '@packages/ui/src/shared/Icon';
import QuestionSvg from '@packages/ui/src/assets/icon/common/question.svg';
import { useGetUserDataQuery } from '@packages/model/src/api/auth/useGetUserDataQuery';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { QuickSearchModal } from '@/features/QuickSearchModal';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';

interface HeaderMainContentProps {
    className?: string;
}

export const HeaderMainContent: FC<HeaderMainContentProps> = (props) => {
    const { className } = props;

    const { data } = useGetUserDataQuery();

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
