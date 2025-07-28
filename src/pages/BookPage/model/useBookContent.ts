import { useCallback, useState } from 'react';
import { useUrlSearchParams } from '@/shared/lib/hooks/useUrlSearchParams';

export const TabValues = ['info', 'chapters', 'comments'] as const;
export type TabValues = (typeof TabValues)[number];

const isTabValue = (value: unknown): value is TabValues => {
    return TabValues.includes(value as TabValues);
};

const isTabValueOrDefault = (value: string | null): TabValues => {
    if (isTabValue(value)) return value;
    return 'info';
};

export function useBookContent() {
    const { setSearchParam, getSearchParam } = useUrlSearchParams();
    const [tabValue, setTabValue] = useState<TabValues>(
        isTabValueOrDefault(getSearchParam('section')),
    );

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
