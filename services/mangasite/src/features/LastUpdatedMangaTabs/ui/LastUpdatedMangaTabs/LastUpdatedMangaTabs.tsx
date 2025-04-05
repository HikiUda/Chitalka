import { FC, useMemo } from 'react';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { useGetUserDataQuery } from '@packages/model/src/api/auth';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { MyLastUpdatedTab } from '../MyLastUpdatedTab/MyLastUpdatedTab';
import { AllLastUpdatedTab } from '../AllLastUpdatedTab/AllLastUpdatedTab';
import cls from './LastUpdatedMangaTabs.module.scss';

interface LastUpdatedMangaTabsProps {
    className?: string;
}
//TODO vertualized
export const LastUpdatedMangaTabs: FC<LastUpdatedMangaTabsProps> = (props) => {
    const { className } = props;
    const { data: userData } = useGetUserDataQuery();
    const tabs: TabItem<string>[] = useMemo(() => {
        const tabArr = [
            {
                id: 1,
                title: 'Все',
                content: <AllLastUpdatedTab />,
            },
        ];
        if (userData) {
            tabArr.push({
                id: 2,
                title: 'Мои',
                content: <MyLastUpdatedTab />,
            });
        }
        return tabArr;
    }, [userData]);
    return (
        <CardBlock className={cls.LastUpdatedMangaTabs}>
            <VStack className={className} max>
                <Heading HeadingTag="h2" color="primary">
                    Последнии обновления
                </Heading>
                <Tabs tabs={tabs} />
            </VStack>
        </CardBlock>
    );
};
