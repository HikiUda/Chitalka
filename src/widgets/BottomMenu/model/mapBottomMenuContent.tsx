import { ReactNode } from 'react';
import { BottomMenuMainContent } from '../ui/BottomMenuMainContent/BottomMenuMainContent';
import { ReadChapterBottomMenu } from '../ui/ReadChapterBottomMenu/ReadChapterBottomMenu';
import { Routes, RoutesValues } from '@/shared/kernel/router';

export const mapBottomMenuContent: OptionalRecord<RoutesValues, ReactNode> & {
    default: ReactNode;
} = {
    default: <BottomMenuMainContent />,
    [Routes.MANGA_READ]: <ReadChapterBottomMenu />,
};
