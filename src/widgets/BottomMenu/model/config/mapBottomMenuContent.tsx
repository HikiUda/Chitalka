import { RoutesConst, RoutesConstType } from '@/shared/config/router';
import { ReactNode } from 'react';
import { BottomMenuMainContent } from '../../ui/BottomMenuMainContent/BottomMenuMainContent';
import { ReadChapterBottomMenu } from '../../ui/ReadChapterBottomMenu/ReadChapterBottomMenu';

export const mapBottomMenuContent: Record<RoutesConstType | 'default', ReactNode> = {
    default: <BottomMenuMainContent />,
    [RoutesConst.READ_CHAPTER]: <ReadChapterBottomMenu />,
};
