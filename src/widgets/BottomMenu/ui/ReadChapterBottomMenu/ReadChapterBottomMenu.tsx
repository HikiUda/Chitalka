import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import QuestionSvg from '@/shared/assets/icon/common/question.svg';
import { useMatch } from 'react-router-dom';
import { getMangaSiteRoute } from '@/shared/config/router';
import { BottomMenuLayout } from '@/shared/layout/BottomMenuLayout';
import cls from './ReadChapterBottomMenu.module.scss';
import { ChaptersNavigation } from '@/features/MangaChapters';
import { LogoMangaSite } from '@/entities/Logo';

interface ReadChapterBottomMenuProps {
    className?: string;
}

export const ReadChapterBottomMenu: FC<ReadChapterBottomMenuProps> = (props) => {
    const { className } = props;

    const match = useMatch(getMangaSiteRoute.readChapter(':mangaId', ':chapterId'));
    if (!match?.params.mangaId || !match?.params.chapterId) return null;
    const { mangaId, chapterId } = match.params;

    return (
        <BottomMenuLayout mayHide className={classNames(cls.BottomMenu, {}, [className])}>
            <HStack justify="between">
                <LogoMangaSite />
                <ChaptersNavigation mangaId={mangaId} chapterId={chapterId} />
                <Icon Svg={QuestionSvg} width={30} height={30} />
            </HStack>
        </BottomMenuLayout>
    );
};
