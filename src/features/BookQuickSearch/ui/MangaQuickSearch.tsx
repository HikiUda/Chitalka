import { ReactNode } from 'react';
import { QuickSearch } from './layout/QuickSearch';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const MangaQuickSearchContent = lazyNamed(
    () => import('./MangaQuickSearchContent'),
    'MangaQuickSearchContent',
);

type MangaQuickSearchProps = {
    trigger: ReactNode;
};

export const MangaQuickSearch = (props: MangaQuickSearchProps) => {
    const { trigger } = props;
    return <QuickSearch trigger={trigger} content={<MangaQuickSearchContent />} />;
};
