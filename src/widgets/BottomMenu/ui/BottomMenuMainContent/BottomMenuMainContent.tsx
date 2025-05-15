import { FC } from 'react';
import cls from './BottomMenuMainContent.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Icon } from '@/shared/deprecate-ui/Icon';
import QuestionSvg from '@/shared/assets/icon/common/question.svg?react';
import { BottomMenuLayout } from '@/shared/layout/BottomMenuLayout';
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
                <Icon Svg={QuestionSvg} width={30} height={30} />
                <PopUserMenu />
            </HStack>
        </BottomMenuLayout>
    );
};
