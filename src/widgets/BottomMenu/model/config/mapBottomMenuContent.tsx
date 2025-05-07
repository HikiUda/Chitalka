import { MangaSiteRoutes, MangaSiteRoutesType } from '@/shared/config/router';
import { ReactNode } from 'react';
import { BottomMenuMainContent } from '../../ui/BottomMenuMainContent/BottomMenuMainContent';
import { ReadChapterBottomMenu } from '../../ui/ReadChapterBottomMenu/ReadChapterBottomMenu';

export const mapBottomMenuContent: Record<MangaSiteRoutesType | 'default', ReactNode> = {
    default: <BottomMenuMainContent />,
    [MangaSiteRoutes.READ_CHAPTER]: <ReadChapterBottomMenu />,
};
