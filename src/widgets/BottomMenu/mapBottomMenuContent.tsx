import { ReactNode } from 'react';
import { Routes } from '@/shared/kernel/router';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';

const BottomMenuMain = lazyNamed(() => import('./ui/BottomMenuMain'), 'BottomMenuMain');
const ReadMangaBottomMenu = lazyNamed(
    () => import('./ui/ReadMangaBottomMenu'),
    'ReadMangaBottomMenu',
);

export const mapBottomMenuContent: OptionalRecord<Routes, ReactNode> & {
    default: ReactNode;
} = {
    default: <BottomMenuMain />,
    [Routes.MANGA_READ]: <ReadMangaBottomMenu />,
};
