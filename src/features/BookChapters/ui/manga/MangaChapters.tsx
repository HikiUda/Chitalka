import { memo } from 'react';
import { useMangaGetChapterList } from '../../model/manga/useMangaGetChapterList';
import { BookChaptersLayout, ChapterEyeIcon } from '../layout/BookChaptersLayout';
import { BookId } from '@/shared/kernel/book/book';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { Input } from '@/shared/ui/kit/input';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { getRoute } from '@/shared/kernel/router';
import { createI18nModule } from '@/shared/kernel/i18n';

type MangaChaptersProps = {
    className?: string;
    mangaId: BookId;
    onChapterClick?: () => void;
};

const { useI18n } = createI18nModule({
    findChapter: { ru: 'Найти главу', en: 'Find chapter' },
});

export const MangaChapters = memo((props: MangaChaptersProps) => {
    const { className, mangaId, onChapterClick } = props;
    const t = useI18n();

    const {
        chapters = [],
        fetchNextPage,
        isFetching,
        order,
        search,
    } = useMangaGetChapterList(mangaId);

    const trottleFetchNextPage = useTrottle(() => fetchNextPage(), 1000);
    const intersect = useIntersection(() => {
        if (!isFetching) trottleFetchNextPage();
    });

    return (
        <BookChaptersLayout
            className={className}
            order={<ToggleOrder {...order} />}
            search={<Input className="max-w-80" placeholder={t('findChapter')} {...search} />}
            list={
                <ChapterList
                    chapters={chapters}
                    renderChapter={(chapter) => (
                        <ChapterListItem
                            key={chapter.id}
                            before={<ChapterEyeIcon isUserViewed={chapter.isUserViewed} />}
                            bookLink={getRoute.MANGA_READ(mangaId, chapter)}
                            chapter={chapter}
                            onClick={onChapterClick}
                        />
                    )}
                    isLoading={isFetching}
                    skeletonsCount={30}
                    action={<div ref={intersect} />}
                />
            }
        />
    );
});
MangaChapters.displayName = 'MangaChapters';
