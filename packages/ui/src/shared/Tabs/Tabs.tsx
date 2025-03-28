import { memo, ReactNode } from 'react';
import { Collection, Tab, TabList, TabPanel, Tabs } from 'react-aria-components';
import { classNames } from '@packages/model/src/lib/classNames';
import { getFlex } from '../Stack';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    id: number;
    title: T;
    content: ReactNode;
}

interface MyTabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
}

export const MyTabs = memo(<T extends string>(props: MyTabsProps<T>) => {
    const { className, tabs } = props;

    return (
        <Tabs className={classNames(cls.Tabs, {}, [className])}>
            <TabList
                className={classNames(cls.tabList, {}, [getFlex({ justify: 'start' })])}
                items={tabs}
                style={{ flex: 1 }}
            >
                {(item) => <Tab className={cls.tab}>{item.title}</Tab>}
            </TabList>

            <Collection items={tabs}>{(item) => <TabPanel>{item.content}</TabPanel>}</Collection>
        </Tabs>
    );
});
