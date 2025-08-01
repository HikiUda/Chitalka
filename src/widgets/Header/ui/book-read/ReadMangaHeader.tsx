import { useParams } from 'react-router-dom';
import { SettingsIcon } from 'lucide-react';
import { PathParams, Routes } from '@/shared/kernel/router';
import { HeaderLayout } from '@/shared/ui/layout/HeaderLayout';
import { PopUserMenu } from '@/features/PopUserMenu';
import { AuthModal } from '@/features/AuthModal';
import { useHideLayout } from '@/shared/ui/layout/useHideLayout';
import { BackToManga, MangaChaptersNavigation } from '@/features/BookChapters';
import { Button } from '@/shared/ui/kit/button';
import { useSession } from '@/shared/kernel/session';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';

const ReadMangaHeader = () => {
    const { isUserAuth } = useSession();
    const isWidthLg = useWindowSize.use.isWidthLg();
    const { hidden } = useHideLayout();
    const { mangaId, chapterId } = useParams<PathParams[typeof Routes.MANGA_READ]>();
    if (!mangaId || !chapterId) return null;

    return (
        <HeaderLayout hidden={hidden}>
            <div
                className={cn(
                    'grid gap-2 h-full',
                    isWidthLg ? 'grid-cols-3' : 'grid-cols-[1fr_auto]',
                )}
            >
                <BackToManga mangaId={mangaId} chapterId={chapterId} />
                {isWidthLg && <MangaChaptersNavigation mangaId={mangaId} chapterId={chapterId} />}
                <div className="flex items-center justify-end gap-2">
                    <Button>
                        <SettingsIcon />
                    </Button>
                    {isUserAuth ? <PopUserMenu /> : <AuthModal />}
                </div>
            </div>
        </HeaderLayout>
    );
};
export const Header = ReadMangaHeader;
