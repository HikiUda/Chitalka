import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import LikeIcon from '@ui/assets/icon/common/like.svg';
import BookmarkIcon from '@ui/assets/icon/common/bookmark.svg';
import BookIcon from '@ui/assets/icon/common/book.svg';
import EyeIcon from '@ui/assets/icon/common/eye.svg';

import { AppLink } from '@packages/ui/src/shared/AppLink';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import { IconInfoBirka } from '@packages/ui/src/shared/IconInfoBirka';
import { getStyleLineClamp } from '@packages/ui/src/shared/StyleHooks';
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
