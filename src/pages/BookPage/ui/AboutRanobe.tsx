import { memo } from 'react';
import { AboutBook } from './layout/AboutBook';
import { BookId } from '@/shared/kernel/book/book';
import { RanobeBookmarkStatistic, RanobeRateStatistic } from '@/features/BookStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import { RanobeRelatedSlider } from '@/features/BookRelated';
import {
    CategoryCollapsedList,
    useGetRanobe,
    useRanobeCategories,
    useRanobeBasicInfo,
} from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const BookBasicInfo = lazyNamed(() => import('@/entities/BookInfo'), 'BookBasicInfo');

type AboutRanobeProps = {
    className?: string;
    ranobeId: BookId;
};

export const AboutRanobe = memo((props: AboutRanobeProps) => {
    const { className, ranobeId } = props;
    const { ranobe } = useGetRanobe(ranobeId);
    const { categories } = useRanobeCategories(ranobe);
    const { basicInfo } = useRanobeBasicInfo(ranobe);

    return (
        <AboutBook
            className={className}
            basicInfo={<BookBasicInfo basicInfo={basicInfo} />}
            description={<TextDisclosure text={ranobe.description} />}
            categories={<CategoryCollapsedList categories={categories} />}
            relatedBooks={<RanobeRelatedSlider ranobeId={ranobeId} />}
            rateStatistic={<RanobeRateStatistic ranobeId={ranobeId} />}
            bookmarkStatistic={<RanobeBookmarkStatistic ranobeId={ranobeId} />}
        />
    );
});
AboutRanobe.displayName = 'AboutRanobe';
