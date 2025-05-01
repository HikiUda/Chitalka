import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useMatch } from 'react-router-dom';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './ReadChapterHeader.module.scss';
import { ChaptersNavigation } from '@/features/MangaChapters';

interface ReadChapterHeaderProps {
    className?: string;
}

export const ReadChapterHeader: FC<ReadChapterHeaderProps> = (props) => {
    const { className } = props;

    const match = useMatch(getMangaSiteRoute.readChapter(':mangaId', ':chapterId'));
    if (!match?.params.mangaId || !match?.params.chapterId) return null;
    const { mangaId, chapterId } = match.params;

    return (
        <HStack justify="between" className={classNames(cls.ReadChapterHeader, {}, [className])}>
            <ChaptersNavigation mangaId={mangaId} />
        </HStack>
    );
};
