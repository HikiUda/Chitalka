import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useQuery } from '@tanstack/react-query';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { Heading } from '@packages/ui/src/shared/Heading';
import { getFlex, VStack } from '@packages/ui/src/shared/Stack';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { ChapterApi } from '../../model/api/chapterApi/chapterApi';
import cls from './BackToManga.module.scss';

interface BackToMangaProps {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
}

export const BackToManga: FC<BackToMangaProps> = (props) => {
    const { className, mangaId, chapterId } = props;
    const { data } = useQuery(ChapterApi.getQueryOptions(chapterId));
    return (
        <AppLink
            to={`${getMangaSiteRoute.manga(mangaId)}?section=chapters`}
            backgroundOnHover
            noOpacityHover
            className={classNames(cls.BackToManga, {}, [className, getFlex({ justify: 'start' })])}
        >
            <Icon className={cls.rotate} Svg={ArrowSvg} height={25} width={30} />
            <VStack gap="4">
                <Heading className={cls.heading} italic HeadingTag="h5">
                    {data?.mangaTitle}
                </Heading>
                <Heading className={cls.heading} bold>
                    {data?.title || '...'}
                </Heading>
            </VStack>
        </AppLink>
    );
};
