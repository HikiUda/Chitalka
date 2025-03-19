import { FC } from 'react';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import { VStack } from '@packages/ui/src/shared/Stack';
import { Heading } from '@packages/ui/src/shared/Heading';
import { MyLastUpdatedTab } from '../MyLastUpdatedTab/MyLastUpdatedTab';
import { AllLastUpdatedTab } from '../AllLastUpdatedTab/AllLastUpdatedTab';

interface LastUpdatedMangaTabsProps {
    className?: string;
}

const tabs: TabItem<string>[] = [
    {
        id: 1,
        title: 'Все',
        content: <AllLastUpdatedTab />,
    },
    {
        id: 2,
        title: 'Мои',
        content: <MyLastUpdatedTab />,
    },
];

export const LastUpdatedMangaTabs: FC<LastUpdatedMangaTabsProps> = (props) => {
    const { className } = props;

    return (
        <VStack max>
            <Heading HeaderTag="h2" color="primary">
                Последнии обновления
            </Heading>
            <Tabs tabs={tabs} />
        </VStack>
    );
};
