import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import cls from './OtherInfoOnMain.module.scss';
import { LastUpdatedMangaTabs } from '@/features/LastUpdatedMangaTabs';
import { SelectionOfCollections } from '@/features/SelectionOfCollections';
import { UserActivityCardList } from '@/features/UserActivityCardList';

interface OtherInfoOnMainProps {
    className?: string;
}

export const OtherInfoOnMain: FC<OtherInfoOnMainProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.OtherInfoOnMain, {}, [className])}>
            <LastUpdatedMangaTabs className={cls.blockMargin} />
            <div className={cls.otherList}>
                <SelectionOfCollections />
                <UserActivityCardList />
            </div>
        </div>
    );
};
