import { ReactNode } from 'react';
import { QuickSearch } from './layout/QuickSearch';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const RanobeQuickSearchContent = lazyNamed(
    () => import('./RanobeQuickSearchContent'),
    'RanobeQuickSearchContent',
);

type RanobeQuickSearchProps = {
    trigger: ReactNode;
};

export const RanobeQuickSearch = (props: RanobeQuickSearchProps) => {
    const { trigger } = props;
    return <QuickSearch trigger={trigger} content={<RanobeQuickSearchContent />} />;
};
