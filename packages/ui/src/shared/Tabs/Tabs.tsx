import { memo, ReactNode } from 'react';
import { Collection, Tab, TabList, TabPanel, Tabs, TabsProps, Key } from 'react-aria-components';
import { classNames } from '@packages/model/src/lib/classNames';
import { getFlex } from '../Stack';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    id: Key;
    title: T;
    content: ReactNode;
}

interface MyTabsProps<T extends string> extends TabsProps {
    className?: string;
    /**
     * TabItem have 3 requered props
     *
     * id - string | number
     *
     * title - string (name of tab)
     *
     * content - ReactNode (content inside the tab)
     */
    tabs: TabItem<T>[];
}

export const MyTabs = memo(<T extends string>(props: MyTabsProps<T>) => {
    const { className, tabs, ...otherProps } = props;

    return (
        <Tabs className={classNames(cls.Tabs, {}, [className])} {...otherProps}>
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
