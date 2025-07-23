import { useParams } from 'react-router-dom';
import { CircleHelpIcon } from 'lucide-react';
import { PathParams, Routes } from '@/shared/kernel/router';
import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { useHideLayout } from '@/shared/ui/layout/useHideLayout';
import { LogoShort } from '@/entities/Logo';
import { MangaChaptersNavigation } from '@/features/BookChapters';

export const ReadMangaBottomMenu = () => {
    const { hidden } = useHideLayout();
    const { mangaId, chapterId } = useParams<PathParams[typeof Routes.MANGA_READ]>();
    if (!mangaId || !chapterId) return null;

    return (
        <BottomMenuLayout hidden={hidden}>
            <div className="flex items-center justify-between gap-2">
                <LogoShort />
                <MangaChaptersNavigation mangaId={mangaId} chapterId={chapterId} />
                <CircleHelpIcon size={30} className="stroke-primary" />
            </div>
        </BottomMenuLayout>
    );
};
