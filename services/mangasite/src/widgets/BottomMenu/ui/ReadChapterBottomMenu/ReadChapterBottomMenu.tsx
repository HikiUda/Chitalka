import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import QuestionSvg from '@packages/ui/src/assets/icon/common/question.svg';
import { useMatch } from 'react-router-dom';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { BottomMenuLayout } from '@packages/ui/src/layout/BottomMenuLayout';
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
