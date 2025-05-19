import { FC } from 'react';
import { OtherInfoOnMain } from '../OtherInfoOnMain/OtherInfoOnMain';
import { LastUpdatedPopularMangaSlider } from '../LastUpdatedPopularMangaSlider/LastUpdatedPopularMangaSlider';
import { ContinueReadMangaSlider } from '../ContinueReadMangaSlider/ContinueReadMangaSlider';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/layout/Page';
import { NowReadMangaBlock } from '@/features/NowReadMangaBlock';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <LastUpdatedPopularMangaSlider className="mb-4" />
            <ContinueReadMangaSlider className="mb-4" />
            {/* <ContinueReadMangaSlider className={cls.blockMargin} /> */}
            <NowReadMangaBlock className={cls.blockMargin} />
            <OtherInfoOnMain />
        </Page>
    );
};
export default MainPage;
