import { useBookLastUpdatedTabs } from './model/useBookLastUpdatedTabs/useBookLastUpdatedTabs';
import { BookPopularLastUpdatedSlider } from './ui/BookPopularLastUpdatedSlider';
import { BookSectionPage } from './ui/BookSectionPage';
import { BookNowReadSlider } from './ui/BookNowReadSlider';
import { BookLastUpdatedTabs } from './ui/BookLastUpdatedTabs';
import { useRanobeGetPopularLastUpdated } from './model/useBookGetPopularLastUpdated/useRanobeGetPopularLastUpdated';
import { useRanobeGetAllLastUpdated } from './model/useBookLastUpdatedTabs/useRanobeGetAllLastUpdated';
import { useRanobeGetMyLastUpdated } from './model/useBookLastUpdatedTabs/useRanobeGetMyLastUpdated';
import { useRanobeNowRead } from './model/useBookNowRead/useRanobeNowRead';
import { getRoute } from '@/shared/kernel/router';
import { RanobeContinueReadSlider } from '@/features/BookContinueRead';
import { CollectionCard, CollectionGridLayout } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';

const MangaSectionPage = () => {
    const mainSlider = useRanobeGetPopularLastUpdated();
    const nowRead = useRanobeNowRead();

    const allBook = useRanobeGetAllLastUpdated();
    const myBook = useRanobeGetMyLastUpdated();
    const lastUpdatdTabs = useBookLastUpdatedTabs({ allBook, myBook, book: 'manga' });

    return (
        <BookSectionPage
            mainSlider={
                <BookPopularLastUpdatedSlider
                    list={mainSlider.data}
                    bookLink={getRoute.RANOBE}
                    isLoading={mainSlider.isLoading}
                />
            }
            continueRead={<RanobeContinueReadSlider />}
            nowRead={<BookNowReadSlider bookNowRead={nowRead} bookLink={getRoute.RANOBE} />}
            lastUpdatedTabs={
                <BookLastUpdatedTabs tabs={lastUpdatdTabs} bookLink={getRoute.RANOBE_READ} />
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
