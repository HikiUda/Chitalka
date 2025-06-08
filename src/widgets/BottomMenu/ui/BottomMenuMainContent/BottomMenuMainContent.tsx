import { FC } from 'react';
import { CircleHelpIcon } from 'lucide-react';
import cls from './BottomMenuMainContent.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { LogoMangaSite } from '@/entities/Logo';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { PopUserMenu } from '@/features/PopUserMenu';

interface BottomMenuMainContentProps {
    className?: string;
}

export const BottomMenuMainContent: FC<BottomMenuMainContentProps> = (props) => {
    const { className } = props;

    return (
        <BottomMenuLayout className={classNames(cls.BottomMenu, {}, [className])}>
            <HStack justify="between">
                <CatalogLink iconOnly iconSize={30} />
                <CollectionLink iconOnly iconSize={30} />
                <LogoMangaSite />
                <CircleHelpIcon size={30} className="stroke-primary" />
                <PopUserMenu />
            </HStack>
        </BottomMenuLayout>
    );
};
