import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { useGetUserLastSearchQueries } from '../../model/api/useGetUserLastSearchQueries';
import { ResentSearchItem } from './ResentSearchItem';

interface ResentSearchProps {
    className?: string;
    onSelectSearch?: (value: string) => void;
}

export const ResentSearch = memo((props: ResentSearchProps) => {
    const { className, onSelectSearch } = props;
    const { data = [] } = useGetUserLastSearchQueries();

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
