import { memo } from 'react';
import cls from './CollectionCard.module.scss';
import LikeIcon from '@/shared/assets/icon/common/like.svg';
import BookmarkIcon from '@/shared/assets/icon/common/bookmark.svg';
import BookIcon from '@/shared/assets/icon/common/book.svg';
import EyeIcon from '@/shared/assets/icon/common/eye.svg';
import { classNames } from '@/shared/lib/helpers/classNames';

import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Heading } from '@/shared/ui/Heading';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';
import { IconInfoBirka } from '@/shared/ui/IconInfoBirka';
import { getStyleLineClamp } from '@/shared/ui/StyleHooks';

interface CollectionCardProps {
    className?: string;
}

export const CollectionCard = memo((props: CollectionCardProps) => {
    const { className } = props;

    return (
        <AppLink to={'/'} className={classNames(cls.CollectionCard, {}, [className])}>
            <VStack justify="center" align="center">
                <Heading className={classNames(cls.title, {}, [getStyleLineClamp()])} bold>
                    Tittle of collection
                </Heading>
                <HStack justify="center" align="center" className={cls.tagInfo}>
                    <IconInfoBirka Svg={EyeIcon} info={1289} />
                    <IconInfoBirka Svg={LikeIcon} info={444} />
                    <IconInfoBirka Svg={BookIcon} info={56} />
                    <IconInfoBirka Svg={BookmarkIcon} info={33} />
                </HStack>
            </VStack>
            <div className={cls.collectionPreview}>
                <AppAdaptiveImage className={cls.img1} width={90} />
                <AppAdaptiveImage className={cls.img2} width={90} />
                <AppAdaptiveImage className={cls.img3} width={90} />
            </div>
        </AppLink>
    );
});
