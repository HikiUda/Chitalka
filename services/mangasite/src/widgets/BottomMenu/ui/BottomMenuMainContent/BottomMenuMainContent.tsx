import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { LogoMangaSite } from '@packages/ui/src/entities/Logo';
import { Icon } from '@packages/ui/src/shared/Icon';
import QuestionSvg from '@packages/ui/src/assets/icon/common/question.svg';
import { CatalogLink, CollectionLink } from '@/entities/MangaSiteLinks';
import { PopUserMenu } from '@/features/PopUserMenu';

interface BottomMenuMainContentProps {
    className?: string;
}

export const BottomMenuMainContent: FC<BottomMenuMainContentProps> = (props) => {
    const { className } = props;

    return (
        <HStack justify="between" className={classNames('', {}, [className])}>
            <CatalogLink iconOnly iconSize={30} />
            <CollectionLink iconOnly iconSize={30} />
            <LogoMangaSite />
            <Icon Svg={QuestionSvg} width={30} height={30} />
            <PopUserMenu />
        </HStack>
    );
};
