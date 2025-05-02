import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import { MangaIdType } from '@packages/model/src/entities/manga';
import ArrowSvg from '@packages/ui/src/assets/icon/common/sliderArrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import BurgerSvg from '@packages/ui/src/assets/icon/common/numberList.svg';
import { isMobile } from 'react-device-detect';
import { useQuery } from '@tanstack/react-query';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { Heading } from '@packages/ui/src/shared/Heading';
import { MangaChaptersModal } from '../MangaChaptersModal/MangaChaptersModal';
import { ChapterApi } from '../../model/api/chapterApi/chapterApi';
import cls from './ChaptersNavigation.module.scss';
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
                to={getMangaSiteRoute.readChapter(
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
                to={getMangaSiteRoute.readChapter(
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
