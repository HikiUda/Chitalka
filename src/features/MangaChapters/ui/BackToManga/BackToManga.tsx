import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChapterApi } from '../../model/api/chapterApi/chapterApi';
import cls from './BackToManga.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { MangaIdType } from '@/shared/kernel/manga';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { getRoute } from '@/shared/kernel/router';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { getFlex, VStack } from '@/shared/deprecate-ui/Stack';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';

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
            to={`${getRoute.manga(mangaId)}?section=chapters`}
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
