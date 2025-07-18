import { useMangaGetCovers } from '../model/useMangaGetCovers';
import { BookId } from '@/shared/kernel/book/book';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const CoversModal = lazyNamed(() => import('./CoversModal'), 'CoversModal');

type MangaCoversModalProps = {
    mangaId: BookId;
};

export const MangaCoversModal = (props: MangaCoversModalProps) => {
    const { mangaId } = props;
    const { covers } = useMangaGetCovers(mangaId);
    return <CoversModal covers={covers} />;
};
