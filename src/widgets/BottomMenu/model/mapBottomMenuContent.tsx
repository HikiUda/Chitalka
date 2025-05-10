import { ReactNode } from 'react';
import { BottomMenuMainContent } from '../ui/BottomMenuMainContent/BottomMenuMainContent';
import { ReadChapterBottomMenu } from '../ui/ReadChapterBottomMenu/ReadChapterBottomMenu';
import { RoutesConst, RoutesConstType } from '@/shared/config/router';

export const mapBottomMenuContent: OptionalRecord<RoutesConstType, ReactNode> & {
    default: ReactNode;
} = {
    default: <BottomMenuMainContent />,
    [RoutesConst.READ_CHAPTER]: <ReadChapterBottomMenu />,
};
