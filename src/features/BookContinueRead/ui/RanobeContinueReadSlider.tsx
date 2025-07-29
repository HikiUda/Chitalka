import { memo, ReactNode } from 'react';
import { useRanobeGetContinueReadList } from '../model/useRanobeGetContinueReadList';
import { useRanobeDeleteContinueRead } from '../model/useRanobeDeleteContinueRead';
import { BookContinueReadCard } from './BookContinueReadCard';

import { BookContinueReadSlider } from './BookContinueReadSlider';
import { getRoute } from '@/shared/kernel/router';

type RanobeContinueReadSliderProps = {
    className?: string;
    /** @description If user have no continue read books */
    fallback: ReactNode;
};

export const RanobeContinueReadSlider = memo((props: RanobeContinueReadSliderProps) => {
    const { className, fallback } = props;

    const { data = [], isLoading } = useRanobeGetContinueReadList();
    const { deleteContinueReadRanobe, getIsPending } = useRanobeDeleteContinueRead();

    if (!isLoading && !data.length) return fallback;

    return (
        <BookContinueReadSlider
            className={className}
            cards={data.map((ranobe, index) => (
                <BookContinueReadCard
                    book={ranobe}
                    chapterLink={getRoute.RANOBE_READ(ranobe.urlId, ranobe)}
                    key={index}
                    className="basis-80"
                    onDelete={() => deleteContinueReadRanobe(ranobe.id)}
                    disabled={getIsPending(ranobe.id)}
                />
            ))}
            isLoading={isLoading}
            deleteAll={() => deleteContinueReadRanobe(0)}
            isDeleteAllPending={getIsPending(0)}
        />
    );
});
RanobeContinueReadSlider.displayName = 'RanobeContinueReadSlider';
