import { memo } from 'react';
import { BookChaptersLayout, ChapterEyeIcon } from '../layout/BookChaptersLayout';
import { useRanobeGetChapterList } from '../../model/ranobe/useRanobeGetChapterList';
import { BookId } from '@/shared/kernel/book/book';
import { ChapterList, ChapterListItem } from '@/entities/ChapterList';
import { useIntersection } from '@/shared/lib/hooks/useIntersection';
import { Input } from '@/shared/ui/kit/input';
import { ToggleOrder } from '@/entities/ToggleOrder';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';
import { getRoute } from '@/shared/kernel/router';
import { createI18nModule } from '@/shared/kernel/i18n';

type RanobeChaptersProps = {
    className?: string;
    ranobeId: BookId;
    onChapterClick?: () => void;
};

const { useI18n } = createI18nModule({
    findChapter: { ru: 'Найти главу', en: 'Find chapter' },
});

export const RanobeChapters = memo((props: RanobeChaptersProps) => {
    const { className, ranobeId, onChapterClick } = props;
    const t = useI18n();

    const {
        chapters = [],
        fetchNextPage,
        isFetching,
        order,
        search,
    } = useRanobeGetChapterList(ranobeId);

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
                            bookLink={getRoute.RANOBE_READ(ranobeId, chapter)}
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
RanobeChapters.displayName = 'RanobeChapters';
