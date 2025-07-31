import { memo } from 'react';
import { useRanobeGetRelated } from '../model/useRanobeGetRelated';
import { AboutBook } from './about-book-layout/AboutBook';
import { BookRelatedSlider } from './about-book-layout/BookRelatedSlider';
import { BookId } from '@/shared/kernel/book/book';
import { RanobeBookmarkStatistic, RanobeRateStatistic } from '@/features/BookStatistic';
import { TextDisclosure } from '@/shared/ui/kit/text-disclosure';
import {
    CategoryCollapsedList,
    useGetRanobe,
    useRanobeCategories,
    useRanobeBasicInfo,
    BookPeopleList,
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
    const { ranobeRelatedBooks } = useRanobeGetRelated(ranobeId);
    const { categories } = useRanobeCategories(ranobe);
    const { basicInfo } = useRanobeBasicInfo(ranobe);

    return (
        <AboutBook
            className={className}
            basicInfo={<BookBasicInfo basicInfo={basicInfo} />}
            description={<TextDisclosure text={ranobe.description} />}
            categories={<CategoryCollapsedList categories={categories} />}
            people={<BookPeopleList people={ranobe.people} />}
            relatedBooks={<BookRelatedSlider books={ranobeRelatedBooks} />}
            rateStatistic={<RanobeRateStatistic ranobeId={ranobeId} />}
            bookmarkStatistic={<RanobeBookmarkStatistic ranobeId={ranobeId} />}
        />
    );
});
AboutRanobe.displayName = 'AboutRanobe';
