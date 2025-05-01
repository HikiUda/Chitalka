import { memo } from 'react';
import { VStack } from '@packages/ui/src/shared/Stack';
import { useQuery } from '@tanstack/react-query';
import { QuickSearchApi } from '../../model/api/quickSearch';
import { ResentSearchItem } from './ResentSearchItem';

interface ResentSearchProps {
    className?: string;
    onSelectSearch?: (value: string) => void;
}

export const ResentSearch = memo((props: ResentSearchProps) => {
    const { className, onSelectSearch } = props;
    const { data = [] } = useQuery(QuickSearchApi.getLastSearchQueryOptions());

    if (!data.length) return null;

    return (
        <VStack className={className}>
            {data?.map((item) => (
                <ResentSearchItem onSelectSearch={onSelectSearch} key={item}>
                    {item}
                </ResentSearchItem>
            ))}
        </VStack>
    );
});
