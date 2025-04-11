import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import EyeSvg from '@ui/assets/icon/common/eye.svg';
import BookmarkSvg from '@ui/assets/icon/common/bookmark.svg';
import LikeSvg from '@ui/assets/icon/common/like.svg';
import { getMangaSiteRoute } from '@packages/model/src/config/router/mangaSiteRouter';
import { HStack } from '@packages/ui/src/shared/Stack';
import { IconInfoBirka } from '@packages/ui/src/shared/IconInfoBirka';
import { MangaCardInline } from '../MangaCardInline/MangaCardInline';
import { MangaListItemStatisticType } from '@/shared/api/mangaList';

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
