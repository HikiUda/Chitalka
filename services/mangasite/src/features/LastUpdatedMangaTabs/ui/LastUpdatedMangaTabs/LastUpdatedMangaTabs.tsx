import { FC, lazy, useMemo } from 'react';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { CardBlock } from '@packages/ui/src/shared/CardBlock';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import cls from './LastUpdatedMangaTabs.module.scss';

const MyLastUpdatedTab = lazy(() => import('../MyLastUpdatedTab/MyLastUpdatedTab'));
const AllLastUpdatedTab = lazy(() => import('../AllLastUpdatedTab/AllLastUpdatedTab'));

interface LastUpdatedMangaTabsProps {
    className?: string;
}
export const LastUpdatedMangaTabs: FC<LastUpdatedMangaTabsProps> = (props) => {
    const { className } = props;
    const { data: userData } = useQuery(UserDataApi.getUserDataQueryOptions());

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
