import { FC } from 'react';
import { CircleHelpIcon } from 'lucide-react';
import cls from './HeaderMainContent.module.scss';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { HeaderLayout } from '@/shared/layout/HeaderLayout';
import { classNames } from '@/shared/lib/helpers/classNames';
import { LogoMangaSite } from '@/entities/Logo';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { QuickSearch } from '@/features/QuickSearch';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useSession } from '@/shared/api/session';

interface HeaderMainContentProps {
    className?: string;
}

export const HeaderMainContent: FC<HeaderMainContentProps> = (props) => {
    const { className } = props;

    const { isUserAuth } = useSession();

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
                    <CircleHelpIcon size={30} className="stroke-primary" />
                    {isUserAuth ? <PopUserMenu /> : <AuthModal />}
                </HStack>
            </HStack>
        </HeaderLayout>
    );
};
