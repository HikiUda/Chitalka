import { FC } from 'react';
import { LastUpdatedPopularMangaSlider } from '../LastUpdatedPopularMangaSlider/LastUpdatedPopularMangaSlider';
import { NowReadMangaSlider } from '../NowReadMangaSlider/NowReadMangaSlider';
import { LastUpdatedMangaTabs } from '../LastUpdatedMangaTabs/LastUpdatedMangaTabs';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/layout/Page';
import { CollectionGridLayout, CollectionCard } from '@/entities/CollectionList';
import { Heading } from '@/shared/ui/kit/heading';
import { UserCard, UserGridLayout } from '@/entities/UserList';
import { ContinueReadMangaSlider } from '@/features/ContinueReadManga';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <LastUpdatedPopularMangaSlider className="mb-4 w-[99vw] max-w-299" />
            <ContinueReadMangaSlider className="mb-4 w-[99vw] max-w-299" />
            <NowReadMangaSlider className="mb-4 w-[99vw] max-w-299" />
            <div className="xl:grid xl:grid-cols-2 xl:items-start gap-5 flex flex-col-reverse items-center">
                <LastUpdatedMangaTabs />
                <div className="flex flex-col gap-4">
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
