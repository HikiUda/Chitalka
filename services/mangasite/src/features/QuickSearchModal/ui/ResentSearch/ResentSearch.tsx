import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { useGetUserLastSearchQueries } from '../../model/api/useGetUserLastSearchQueries';
import { ResentSearchItem } from './ResentSearchItem';

interface ResentSearchProps {
    className?: string;
}

export const ResentSearch = memo((props: ResentSearchProps) => {
    const { className } = props;
    const { data } = useGetUserLastSearchQueries();

    if (!data.length) return null;

    return (
        <VStack className={classNames('', {}, [className])}>
            {data?.map((item, ind) => <ResentSearchItem key={ind}>{item}</ResentSearchItem>)}
        </VStack>
    );
});
