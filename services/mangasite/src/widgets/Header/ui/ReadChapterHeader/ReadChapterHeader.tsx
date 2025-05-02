import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { useMatch } from 'react-router-dom';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import { HStack } from '@packages/ui/src/shared/Stack';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import { isMobile } from 'react-device-detect';
import { HeaderLayout } from '@packages/ui/src/layout/HeaderLayout';
import cls from './ReadChapterHeader.module.scss';
import { BackToManga, ChaptersNavigation } from '@/features/MangaChapters';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';

interface ReadChapterHeaderProps {
    className?: string;
}

export const ReadChapterHeader: FC<ReadChapterHeaderProps> = (props) => {
    const { className } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());

    const match = useMatch(getMangaSiteRoute.readChapter(':mangaId', ':chapterId'));
    if (!match?.params.mangaId || !match?.params.chapterId) return null;
    const { mangaId, chapterId } = match.params;

    return (
        <HeaderLayout mayHide className={classNames(cls.Header, {}, [className])}>
            <div
                className={classNames(cls.ReadChapterHeader, { [cls.mobileGrid]: isMobile }, [
                    className,
                ])}
            >
                <BackToManga mangaId={mangaId} chapterId={chapterId} />
                {!isMobile && <ChaptersNavigation mangaId={mangaId} chapterId={chapterId} />}
                <HStack justify="end">{data ? <PopUserMenu /> : <AuthModal />}</HStack>
            </div>
        </HeaderLayout>
    );
};
