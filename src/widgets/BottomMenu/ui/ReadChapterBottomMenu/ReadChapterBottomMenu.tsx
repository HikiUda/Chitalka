import { FC } from 'react';
import { useMatch } from 'react-router-dom';
import cls from './ReadChapterBottomMenu.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { Icon } from '@/shared/deprecate-ui/Icon';
import QuestionSvg from '@/shared/assets/icon/common/question.svg?react';
import { getRoute } from '@/shared/kernel/router';
import { BottomMenuLayout } from '@/shared/layout/BottomMenuLayout';
import { ChaptersNavigation } from '@/features/MangaChapters';
import { LogoMangaSite } from '@/entities/Logo';
import { useHideLayout } from '@/shared/layout/useHideLayout';

interface ReadChapterBottomMenuProps {
    className?: string;
}

export const ReadChapterBottomMenu: FC<ReadChapterBottomMenuProps> = (props) => {
    const { className } = props;

    const { hidden } = useHideLayout();
    const match = useMatch(getRoute.readChapter(':mangaId', ':chapterId'));
    if (!match?.params.mangaId || !match?.params.chapterId) return null;
    const { mangaId, chapterId } = match.params;

    return (
        <BottomMenuLayout hidden={hidden} className={classNames(cls.BottomMenu, {}, [className])}>
            <HStack justify="between">
                <LogoMangaSite />
                <ChaptersNavigation mangaId={mangaId} chapterId={chapterId} />
                <Icon Svg={QuestionSvg} width={30} height={30} />
            </HStack>
        </BottomMenuLayout>
    );
};
