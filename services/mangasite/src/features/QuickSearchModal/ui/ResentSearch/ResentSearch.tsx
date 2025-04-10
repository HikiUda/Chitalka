import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { useQuery } from '@tanstack/react-query';
import { ResentSearchItem } from './ResentSearchItem';
import { QuickSearch } from '@/shared/api/mangaList';

interface ResentSearchProps {
    className?: string;
    onSelectSearch?: (value: string) => void;
}

export const ResentSearch = memo((props: ResentSearchProps) => {
    const { className, onSelectSearch } = props;
    const { data = [] } = useQuery(QuickSearch.getLastSearchQueryOptions());

    if (!data.length) return null;

    return (
        <VStack className={classNames('', {}, [className])}>
            {data?.map((item, ind) => (
                <ResentSearchItem onSelectSearch={onSelectSearch} key={ind}>
                    {item}
                </ResentSearchItem>
            ))}
        </VStack>
    );
});
