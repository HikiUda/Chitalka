import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/layout/Page';
import { OtherInfoOnMain } from '../OtherInfoOnMain/OtherInfoOnMain';
import cls from './MainPage.module.scss';
import { RecentUpdatedPopularMangaSlider } from '@/features/RecentUpdatedPopularMangaSlider';
import { ContinueReadMangaSlider } from '@/features/ContinueReadMangaSlider';
import { NowReadMangaBlock } from '@/features/NowReadMangaBlock';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <RecentUpdatedPopularMangaSlider className={cls.blockMargin} />
            <ContinueReadMangaSlider className={cls.blockMargin} />
            <NowReadMangaBlock className={cls.blockMargin} />
            <OtherInfoOnMain />
        </Page>
    );
};
export default MainPage;
