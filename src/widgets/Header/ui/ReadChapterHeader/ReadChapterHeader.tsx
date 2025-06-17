import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isMobile } from 'react-device-detect';
import cls from './ReadChapterHeader.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { PathParams, Routes } from '@/shared/kernel/router';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { BackToManga, ReadSettingsModal } from '@/features/MangaChapters';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useHideLayout } from '@/shared/ui/layout/useHideLayout';
import { MangaChaptersNavigation } from '@/features/BookChapters';

interface ReadChapterHeaderProps {
    className?: string;
}

export const ReadChapterHeader: FC<ReadChapterHeaderProps> = (props) => {
    const { className } = props;

    const { data } = useQuery(UserDataApi.getUserDataQueryOptions());
    const { hidden } = useHideLayout();
    const { mangaId, chapterId } = useParams<PathParams[typeof Routes.MANGA_READ]>();
    if (!mangaId || !chapterId) return null;

    return (
        <HeaderLayout hidden={hidden}>
            <div
                className={classNames(cls.ReadChapterHeader, { [cls.mobileGrid]: isMobile }, [
                    className,
                ])}
            >
                <BackToManga mangaId={mangaId} chapterId={chapterId} />
                {!isMobile && <MangaChaptersNavigation mangaId={mangaId} chapterId={chapterId} />}
                <HStack justify="end">
                    <ReadSettingsModal />
                    {data ? <PopUserMenu /> : <AuthModal />}
                </HStack>
            </div>
        </HeaderLayout>
    );
};
