import { BookPopularLastUpdatedSlider } from './ui/BookPopularLastUpdatedSlider';
import { BookSectionPage } from './ui/BookSectionPage';
import { BookNowReadSlider } from './ui/BookNowReadSlider';
import { BookLastUpdatedTabs } from './ui/BookLastUpdatedTabs';
import { useRanobeGetPopularLastUpdated } from './model/useBookGetPopularLastUpdated/useRanobeGetPopularLastUpdated';
import { useRanobeGetAllLastUpdated } from './model/useBookLastUpdatedTabs/useRanobeGetAllLastUpdated';
import { useRanobeGetMyLastUpdated } from './model/useBookLastUpdatedTabs/useRanobeGetMyLastUpdated';
import { useRanobeNowReadRating } from './model/useBookNowRead/useRanobeNowReadRating';
import { useRanobeNowReadNew } from './model/useBookNowRead/useRanobeNowReadNew';
import { useRanobeNowReadMoreViewed } from './model/useBookNowRead/useRanobeNowReadMoreViewed';
import { CollectionCard, CollectionGridLayout } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeContinueReadSlider = lazyNamed(
    () => import('@/features/BookContinueRead'),
    'RanobeContinueReadSlider',
);

const MangaSectionPage = () => {
    const popularLastUpdated = useRanobeGetPopularLastUpdated();

    // * NowRead
    const nowReadNew = useRanobeNowReadNew();
    const nowReadRating = useRanobeNowReadRating();
    const nowReadMoreViewed = useRanobeNowReadMoreViewed();
    // * NowRead

    // * LastUpdatedTabs
    const allLastUpdated = useRanobeGetAllLastUpdated();
    const myLastUpdated = useRanobeGetMyLastUpdated();
    // * LastUpdatedTabs

    return (
        <BookSectionPage
            mainSlider={<BookPopularLastUpdatedSlider data={popularLastUpdated} />}
            continueRead={<RanobeContinueReadSlider fallback={null} />}
            nowRead={
                <BookNowReadSlider
                    column_1={nowReadNew}
                    column_2={nowReadRating}
                    column_3={nowReadMoreViewed}
                />
            }
            lastUpdatedTabs={<BookLastUpdatedTabs all={allLastUpdated} my={myLastUpdated} />}
            collections={
                <CollectionGridLayout
                    heading={
                        <Heading variant="h2" color="primary" className="mb-2">
                            Коллекции других пользователей
                        </Heading>
                    }
                    list={Array(6).fill(0)}
                    renderItem={(item, ind) => <CollectionCard key={ind} />}
                />
            }
            userRating={
                <UserGridLayout
                    heading={
                        <Heading variant="h2" color="primary" className="mb-2">
                            Самые активные пользователи
                        </Heading>
                    }
                    list={Array(10).fill(0)}
                    renderItem={(item, ind) => <UserCard key={ind} />}
                />
            }
        />
    );
};
export const Component = MangaSectionPage;
