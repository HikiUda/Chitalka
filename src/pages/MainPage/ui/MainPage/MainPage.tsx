import { isMobile } from 'react-device-detect';
import { LastUpdatedPopularMangaSlider } from '../LastUpdatedPopularMangaSlider/LastUpdatedPopularMangaSlider';
import { NowReadMangaSlider } from '../NowReadMangaSlider/NowReadMangaSlider';
import { LastUpdatedMangaTabs } from '../LastUpdatedMangaTabs/LastUpdatedMangaTabs';
import { Page } from '@/shared/ui/layout/Page';
import { CollectionGridLayout, CollectionCard } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';
import { ContinueReadMangaSlider } from '@/features/BookContinueRead';
import { cn } from '@/shared/lib/css';

export const MainPage = () => {
    return (
        <Page>
            <LastUpdatedPopularMangaSlider
                className={cn('mb-4', isMobile && 'w-[96vw] max-w-299')}
            />
            <ContinueReadMangaSlider className={cn('mb-4', isMobile && 'w-[96vw] max-w-299')} />
            <NowReadMangaSlider className={cn('mb-4', isMobile && 'w-[96vw] max-w-299')} />
            <div className="xl:grid xl:grid-cols-2 xl:items-start gap-5 flex flex-col-reverse items-center">
                <LastUpdatedMangaTabs />
                <div className="flex flex-col gap-4 w-full">
                    <CollectionGridLayout
                        heading={
                            <Heading variant="h2" color="primary" className="mb-2">
                                Коллекции других пользователей
                            </Heading>
                        }
                        list={Array(6).fill(0)}
                        renderItem={(item, ind) => <CollectionCard key={ind} />}
                    />
                    <UserGridLayout
                        heading={
                            <Heading variant="h2" color="primary" className="mb-2">
                                Самые активные пользователи
                            </Heading>
                        }
                        list={Array(10).fill(0)}
                        renderItem={(item, ind) => <UserCard key={ind} />}
                    />
                </div>
            </div>
        </Page>
    );
};
