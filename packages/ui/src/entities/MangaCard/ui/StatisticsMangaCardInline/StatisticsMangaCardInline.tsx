import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import EyeSvg from '@ui/assets/icon/common/eye.svg';
import BookmarkSvg from '@ui/assets/icon/common/bookmark.svg';
import LikeSvg from '@ui/assets/icon/common/like.svg';
import { Icon } from '@ui/shared/Icon';
import { HStack } from '@ui/shared/Stack';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import cls from './StatisticsMangaCardInline.module.scss';

interface StatisticsMangaCardInlineProps {
    className?: string;
    views?: number;
    likes?: number;
    inBookmarks?: number;
}

export const StatisticsMangaCardInline = memo((props: StatisticsMangaCardInlineProps) => {
    const { className, views = 0, likes = 0, inBookmarks = 0 } = props;

    return (
        <MangaCardInline className={classNames('', {}, [className])} title="Title" subtitle="Manga">
            <HStack align="center">
                <HStack className={cls.info} gap="4">
                    <Icon Svg={EyeSvg} width={20} height={20} />
                    {toShortcutNumber(views)}
                </HStack>
                <HStack className={cls.info} gap="4">
                    <Icon Svg={LikeSvg} width={20} height={20} />
                    {toShortcutNumber(likes)}
                </HStack>
                <HStack className={cls.info} gap="4">
                    <Icon Svg={BookmarkSvg} width={20} height={20} />
                    {toShortcutNumber(inBookmarks)}
                </HStack>
            </HStack>
        </MangaCardInline>
    );
});
