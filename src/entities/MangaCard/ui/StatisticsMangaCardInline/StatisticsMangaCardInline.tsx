import { memo } from 'react';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { classNames } from '@/shared/lib/helpers/classNames';
import { toShortcutNumber } from '@/shared/lib/helpers/toShortcutNumber';
import EyeSvg from '@/shared/assets/icon/common/eye.svg?react';
import BookmarkSvg from '@/shared/assets/icon/common/bookmark.svg?react';
import LikeSvg from '@/shared/assets/icon/common/like.svg?react';
import { getRoute } from '@/shared/kernel/router/routerConfig';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { IconInfoBirka } from '@/shared/deprecate-ui/IconInfoBirka';
import { MangaListItemStatisticType } from '@/shared/api/deprecated/mangaList';

interface StatisticsMangaCardInlineProps {
    className?: string;
    manga: MangaListItemStatisticType;
}

export const StatisticsMangaCardInline = memo((props: StatisticsMangaCardInlineProps) => {
    const { className, manga } = props;

    return (
        <MangaCardInline
            className={classNames('', {}, [className])}
            to={getRoute.MANGA(manga.urlId)}
            img={manga.cover}
            title={manga.title}
            subtitle={manga.type}
        >
            <HStack justify="start">
                <IconInfoBirka bgColor="none" Svg={EyeSvg} info={toShortcutNumber(manga.views)} />
                <IconInfoBirka bgColor="none" Svg={LikeSvg} info={toShortcutNumber(manga.likes)} />
                <IconInfoBirka
                    bgColor="none"
                    Svg={BookmarkSvg}
                    info={toShortcutNumber(manga.bookmarks)}
                />
            </HStack>
        </MangaCardInline>
    );
});
