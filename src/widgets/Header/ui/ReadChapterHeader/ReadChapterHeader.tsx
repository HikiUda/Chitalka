import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useMatch } from 'react-router-dom';
import { getMangaSiteRoute } from '@/shared/config/router';
import { HStack } from '@/shared/ui/Stack';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@/shared/api/user';
import { isMobile } from 'react-device-detect';
import { HeaderLayout } from '@/shared/layout/HeaderLayout';
import cls from './ReadChapterHeader.module.scss';
import { BackToManga, ChaptersNavigation, ReadSettingsModal } from '@/features/MangaChapters';
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
                <HStack justify="end">
                    <ReadSettingsModal />
                    {data ? <PopUserMenu /> : <AuthModal />}
                </HStack>
            </div>
        </HeaderLayout>
    );
};
