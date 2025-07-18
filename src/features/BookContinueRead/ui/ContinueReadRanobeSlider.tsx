import { useRanobeGetContinueReadList } from '../model/useRanobeGetContinueReadList';
import { useRanobeDeleteContinueRead } from '../model/useRanobeDeleteContinueRead';
import { ContinueReadBookCard } from './ContinueReadBookCard';

import { ContinueReadBookSlider } from './ContinueReadBookSlider';
import { useSession } from '@/shared/kernel/session';
import { getRoute } from '@/shared/kernel/router';

type ContinueReadRanobeSliderProps = {
    className?: string;
};

export const ContinueReadRanobeSlider = (props: ContinueReadRanobeSliderProps) => {
    const { className } = props;

    const { data = [], isLoading } = useRanobeGetContinueReadList();
    const { deleteContinueReadRanobe, getIsPending } = useRanobeDeleteContinueRead();
    const { isUserAuth } = useSession();

    if (!isUserAuth) return null;
    if (!isLoading && !data.length) return null;

    return (
        <ContinueReadBookSlider
            className={className}
            cards={data.map((ranobe, index) => (
                <ContinueReadBookCard
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
