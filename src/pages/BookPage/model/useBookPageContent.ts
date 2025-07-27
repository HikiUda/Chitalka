import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

const TabValues = ['info', 'chapters', 'comments'] as const;
export type TabValues = (typeof TabValues)[number];

const isTabValue = (value: unknown): value is TabValues => {
    return TabValues.includes(value as TabValues);
};

export type TabsType = {
    value: TabValues;
    title: string;
    content: ReactNode;
}[];

export function useBookPageContent(defaultValue: TabValues) {
    const { setSearchParam, getSearchParam } = useUrlSearchParams();
    const [tabValue, setTabValue] = useState<TabValues>(defaultValue);

    useLayoutEffect(() => {
        const section = getSearchParam('section');
        if (isTabValue(section)) setTabValue(section);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onTabChange = useCallback(
        (section: string) => {
            if (isTabValue(section)) {
                setTabValue(section);
                setSearchParam('section', section);
            }
        },
        [setSearchParam],
    );

    return { tabValue, onTabChange };
}
