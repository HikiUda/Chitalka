import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type TabsType<TabValues> = {
    value: TabValues;
    title: string;
    content: ReactNode;
}[];

export function useBookPageContent<TabValues extends readonly string[]>(
    TabValuesConst: TabValues,
    defaultValue: TabValues[number],
) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tabValue, setTabValue] = useState<TabValues[number]>(defaultValue);

    const isTabValue = useCallback(
        (value: unknown): value is TabValues[number] => {
            return TabValuesConst.includes(value as TabValues[number]);
        },
        [TabValuesConst],
    );

    useLayoutEffect(() => {
        const section = searchParams.get('section');
        if (isTabValue(section)) setTabValue(section);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onTabChange = useCallback(
        (section: string) => {
            if (isTabValue(section)) {
                setTabValue(section);
                searchParams.set('section', section);
                setSearchParams(searchParams);
            }
        },
        [isTabValue, searchParams, setSearchParams],
    );

    return { tabValue, onTabChange };
}
