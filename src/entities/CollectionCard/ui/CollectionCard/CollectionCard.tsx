import { memo } from 'react';
import cls from './CollectionCard.module.scss';
import LikeIcon from '@/shared/assets/icon/common/like.svg?react';
import BookmarkIcon from '@/shared/assets/icon/common/bookmark.svg?react';
import BookIcon from '@/shared/assets/icon/common/book.svg?react';
import EyeIcon from '@/shared/assets/icon/common/eye.svg?react';
import { classNames } from '@/shared/lib/helpers/classNames';

import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { HStack, VStack } from '@/shared/deprecate-ui/Stack';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { IconInfoBirka } from '@/shared/deprecate-ui/IconInfoBirka';
import { getStyleLineClamp } from '@/shared/deprecate-ui/StyleHooks';

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
