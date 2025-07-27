import { memo } from 'react';
import { useMangaGetContinueRead } from '../../model/useMangaGetContinueRead';
import { BookContinueReadButton } from './BookContinueReadButton';
import { BookId } from '@/shared/kernel/book/book';

type MangaContinueReadButtonProps = {
    className?: string;
    mangaId: BookId;
};

export const MangaContinueReadButton = memo((props: MangaContinueReadButtonProps) => {
    const { className, mangaId } = props;
    const data = useMangaGetContinueRead(mangaId);

    return <BookContinueReadButton className={className} {...data} />;
});
MangaContinueReadButton.displayName = 'MangaContinueReadButton';
