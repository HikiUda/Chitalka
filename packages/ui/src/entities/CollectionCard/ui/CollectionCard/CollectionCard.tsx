import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { AppLink } from '@ui/shared/AppLink';
import { Heading } from '@ui/shared/Heading';
import LikeIcon from '@ui/assets/icon/common/like.svg';
import BookmarkIcon from '@ui/assets/icon/common/bookmark.svg';
import BookIcon from '@ui/assets/icon/common/book.svg';
import EyeIcon from '@ui/assets/icon/common/eye.svg';

import { HStack, VStack } from '@ui/shared/Stack';

import { AppAdaptiveImage } from '@ui/shared/AppAdaptiveImage';
import { IconInfoBirka } from '@ui/shared/IconInfoBirka';
import { getStyleLineClamp } from '@ui/shared/StyleHooks';
import cls from './CollectionCard.module.scss';

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
