import { useCallback, useState } from 'react';
import { BookChaptersSheetLayout } from '../layout/BookChaptersSheetLayout';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaChapters = lazyNamed(() => import('./MangaChapters'), 'MangaChapters');

type MangaChaptersSheetProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaChaptersSheet = (props: MangaChaptersSheetProps) => {
    const { className, mangaId } = props;
    const [open, setOpen] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <BookChaptersSheetLayout className={className} open={open} onOpenChange={setOpen}>
            <MangaChapters mangaId={mangaId} onChapterClick={close} />
        </BookChaptersSheetLayout>
    );
};
