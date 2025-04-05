import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import EyeSvg from '@ui/assets/icon/common/eye.svg';
import BookmarkSvg from '@ui/assets/icon/common/bookmark.svg';
import LikeSvg from '@ui/assets/icon/common/like.svg';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { MangaListItemStatisticType } from '../../model/types/mangaListItemStatistic';
import cls from './StatisticsMangaCardInline.module.scss';

interface StatisticsMangaCardInlineProps {
    className?: string;
    manga: MangaListItemStatisticType;
}

export const StatisticsMangaCardInline = memo((props: StatisticsMangaCardInlineProps) => {
    const { className, manga } = props;

    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            to={getMangaSiteRoute.manga(manga.urlId)}
            img={manga.cover}
            title={manga.title}
            subtitle={manga.type}
        >
            <HStack justify="start">
                <HStack className={cls.info} gap="4">
                    <Icon Svg={EyeSvg} width={20} height={20} />
                    {toShortcutNumber(manga.views)}
                </HStack>
                <HStack className={cls.info} gap="4">
                    <Icon Svg={LikeSvg} width={20} height={20} />
                    {toShortcutNumber(manga.likes)}
                </HStack>
                <HStack className={cls.info} gap="4">
                    <Icon Svg={BookmarkSvg} width={20} height={20} />
                    {toShortcutNumber(manga.bookmarks)}
                </HStack>
            </HStack>
        </MangaCardInline>
    );
});
