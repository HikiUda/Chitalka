import { ReactNode } from 'react';
import { BottomMenuMain } from './ui/BottomMenuMain';
import { ReadChapterBottomMenu } from './ui/ReadChapterBottomMenu/ReadChapterBottomMenu';
import { Routes, RoutesValues } from '@/shared/kernel/router';

export const mapBottomMenuContent: OptionalRecord<RoutesValues, ReactNode> & {
    default: ReactNode;
} = {
    default: <BottomMenuMain />,
    [Routes.MANGA_READ]: <ReadChapterBottomMenu />,
};
