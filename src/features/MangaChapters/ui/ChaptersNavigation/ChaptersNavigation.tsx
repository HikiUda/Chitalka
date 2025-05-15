import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useQuery } from '@tanstack/react-query';
import { MangaChaptersModal } from '../MangaChaptersModal/MangaChaptersModal';
import { ChapterApi } from '../../model/api/chapterApi/chapterApi';
import cls from './ChaptersNavigation.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Button } from '@/shared/deprecate-ui/Button';
import { MangaIdType } from '@/shared/kernel/manga';
import ArrowSvg from '@/shared/assets/icon/common/sliderArrow.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';
import BurgerSvg from '@/shared/assets/icon/common/numberList.svg?react';
import { getRoute } from '@/shared/kernel/router';
import { AppLink } from '@/shared/deprecate-ui/AppLink';
import { Heading } from '@/shared/deprecate-ui/Heading';
import { getUrlChapterId } from '@/entities/ChapterList';

interface ChaptersNavigationProps {
    className?: string;
    mangaId: MangaIdType;
    chapterId: MangaIdType;
}

export const ChaptersNavigation: FC<ChaptersNavigationProps> = (props) => {
    const { className, mangaId, chapterId } = props;

    const { data } = useQuery(ChapterApi.getQueryOptions(chapterId));

    return (
        <HStack gap="4" className={classNames(cls.ChaptersNavigation, {}, [className])}>
            <AppLink
                disable={!data?.prevChapterId}
                to={getRoute.readChapter(
                    mangaId,
                    getUrlChapterId(data?.tome || 0, data?.chapter || 0, data?.prevChapterId || 0),
                )}
                color="none"
                className={cls.rotate}
            >
                <Icon Svg={ArrowSvg} size={40} />
            </AppLink>
            <MangaChaptersModal
                mangaId={mangaId}
                trigger={
                    <Button color="none" theme="clear" noHover>
                        {isMobile ? (
                            <Icon Svg={BurgerSvg} size={30} />
                        ) : (
                            <>
                                <Heading italic HeadingTag="h5">
                                    Оглавление
                                </Heading>
                                <Heading
                                    bold
                                >{`${data?.tome || 0} том ${data?.chapter || 0} глава`}</Heading>
                            </>
                        )}
                    </Button>
                }
            />
            <AppLink
                disable={!data?.nextChapterId}
                to={getRoute.readChapter(
                    mangaId,
                    getUrlChapterId(data?.tome || 0, data?.chapter || 0, data?.nextChapterId || 0),
                )}
                color="none"
            >
                <Icon Svg={ArrowSvg} size={40} />
            </AppLink>
        </HStack>
    );
};
