import { useMangaGetContinueRead } from '../../model/useMangaGetContinueRead';
import { ContinueReadBookButton } from './ContinueReadBookButton';
import { BookId } from '@/shared/kernel/book/book';

type ContinueReadMangaButtonProps = {
    className?: string;
    mangaId: BookId;
};

export const ContinueReadMangaButton = (props: ContinueReadMangaButtonProps) => {
    const { className, mangaId } = props;
    const data = useMangaGetContinueRead(mangaId);

    return <ContinueReadBookButton className={className} {...data} />;
};
