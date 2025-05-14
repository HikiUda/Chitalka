import { FC } from 'react';
import { useMatch } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isMobile } from 'react-device-detect';
import cls from './ReadChapterHeader.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getRoute } from '@/shared/kernel/router';
import { HStack } from '@/shared/ui/Stack';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { HeaderLayout } from '@/shared/layout/HeaderLayout';
import { BackToManga, ChaptersNavigation, ReadSettingsModal } from '@/features/MangaChapters';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useHideLayout } from '@/shared/layout/useHideLayout';

interface ReadChapterHeaderProps {
    className?: string;
}

export const ReadChapterHeader: FC<ReadChapterHeaderProps> = (props) => {
    const { className } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());
    const { hidden } = useHideLayout();
    const match = useMatch(getRoute.readChapter(':mangaId', ':chapterId'));
    if (!match?.params.mangaId || !match?.params.chapterId) return null;
    const { mangaId, chapterId } = match.params;

    return (
        <HeaderLayout hidden={hidden} className={classNames(cls.Header, {}, [className])}>
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
