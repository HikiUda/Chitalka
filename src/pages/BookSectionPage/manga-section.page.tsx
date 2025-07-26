import { useMangaGetPopularLastUpdated } from './model/useBookGetPopularLastUpdated/useMangaGetPopularLastUpdated';
import { useMangaGetAllLastUpdated } from './model/useBookLastUpdatedTabs/useMangaGetAllLastUpdated';
import { useMangaGetMyLastUpdated } from './model/useBookLastUpdatedTabs/useMangaGetMyLastUpdated';
import { BookPopularLastUpdatedSlider } from './ui/BookPopularLastUpdatedSlider';
import { BookSectionPage } from './ui/BookSectionPage';
import { BookNowReadSlider } from './ui/BookNowReadSlider';
import { BookLastUpdatedTabs } from './ui/BookLastUpdatedTabs';
import { useMangaNowReadNew } from './model/useBookNowRead/useMangaNowReadNew';
import { useMangaNowReadMoreViewed } from './model/useBookNowRead/useMangaNowReadMoreViewed';
import { useMangaNowReadRating } from './model/useBookNowRead/useMangaNowReadRating';
import { MangaContinueReadSlider } from '@/features/BookContinueRead';
import { CollectionCard, CollectionGridLayout } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';

const MangaSectionPage = () => {
    const popularLastUpdated = useMangaGetPopularLastUpdated();

    // * NowRead
    const nowReadNew = useMangaNowReadNew();
    const nowReadRating = useMangaNowReadRating();
    const nowReadMoreViewed = useMangaNowReadMoreViewed();
    // * NowRead

    // * LastUpdatedTabs
    const allLastUpdated = useMangaGetAllLastUpdated();
    const myLastUpdated = useMangaGetMyLastUpdated();
    // * LastUpdatedTabs

    return (
        <BookSectionPage
            mainSlider={<BookPopularLastUpdatedSlider data={popularLastUpdated} />}
            continueRead={<MangaContinueReadSlider />}
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
