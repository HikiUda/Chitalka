import { useMangaGetPopularLastUpdated } from './model/useBookGetPopularLastUpdated/useMangaGetPopularLastUpdated';
import { useBookLastUpdatedTabs } from './model/useBookLastUpdatedTabs/useBookLastUpdatedTabs';
import { useMangaGetAllLastUpdated } from './model/useBookLastUpdatedTabs/useMangaGetAllLastUpdated';
import { useMangaGetMyLastUpdated } from './model/useBookLastUpdatedTabs/useMangaGetMyLastUpdated';
import { useMangaNowRead } from './model/useBookNowRead/useMangaNowRead';
import { BookPopularLastUpdatedSlider } from './ui/BookPopularLastUpdatedSlider';
import { BookSectionPage } from './ui/BookSectionPage';
import { BookNowReadSlider } from './ui/BookNowReadSlider';
import { BookLastUpdatedTabs } from './ui/BookLastUpdatedTabs';
import { getRoute } from '@/shared/kernel/router';
import { MangaContinueReadSlider } from '@/features/BookContinueRead';
import { CollectionCard, CollectionGridLayout } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';

const MangaSectionPage = () => {
    const mainSlider = useMangaGetPopularLastUpdated();
    const nowRead = useMangaNowRead();

    const allBook = useMangaGetAllLastUpdated();
    const myBook = useMangaGetMyLastUpdated();
    const lastUpdatdTabs = useBookLastUpdatedTabs({ allBook, myBook, book: 'manga' });

    return (
        <BookSectionPage
            mainSlider={
                <BookPopularLastUpdatedSlider
                    list={mainSlider.data}
                    bookLink={getRoute.MANGA}
                    isLoading={mainSlider.isLoading}
                />
            }
            continueRead={<MangaContinueReadSlider />}
            nowRead={<BookNowReadSlider bookNowRead={nowRead} bookLink={getRoute.MANGA} />}
            lastUpdatedTabs={
                <BookLastUpdatedTabs tabs={lastUpdatdTabs} bookLink={getRoute.MANGA_READ} />
            }
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
