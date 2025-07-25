import { useRanobeGetContinueReadList } from '../model/useRanobeGetContinueReadList';
import { useRanobeDeleteContinueRead } from '../model/useRanobeDeleteContinueRead';
import { BookContinueReadCard } from './BookContinueReadCard';

import { BookContinueReadSlider } from './BookContinueReadSlider';
import { useSession } from '@/shared/kernel/session';
import { getRoute } from '@/shared/kernel/router';

type RanobeContinueReadSliderProps = {
    className?: string;
};

export const RanobeContinueReadSlider = (props: RanobeContinueReadSliderProps) => {
    const { className } = props;

    const { data = [], isLoading } = useRanobeGetContinueReadList();
    const { deleteContinueReadRanobe, getIsPending } = useRanobeDeleteContinueRead();
    const { isUserAuth } = useSession();

    if (!isUserAuth) return null;
    if (!isLoading && !data.length) return null;

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
};
