import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Page } from '@packages/ui/src/shared/Page';

import cls from './MainPage.module.scss';
import { RecentUpdatedPopularMangaSlider } from '@/features/RecentUpdatedPopularMangaSlider';
import { ContinueReadMangaSlider } from '@/features/ContinueReadMangaSlider';
// import { NowReadMangaBlock } from '@/features/NowReadMangaBlock';
import { OtherInfoOnMain } from '@/widgets/OtherInfoOnMain';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <RecentUpdatedPopularMangaSlider className={cls.blockMargin} />
            <ContinueReadMangaSlider className={cls.blockMargin} />
            {/* <NowReadMangaBlock className={cls.blockMargin} /> */}
            <OtherInfoOnMain />
        </Page>
    );
};
export default MainPage;
