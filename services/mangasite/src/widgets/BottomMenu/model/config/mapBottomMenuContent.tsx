import { MangaSiteRoutesType } from '@packages/model/src/config/router';
import { ReactNode } from 'react';
import { BottomMenuMainContent } from '../../ui/BottomMenuMainContent/BottomMenuMainContent';

export const mapBottomMenuContent: Record<MangaSiteRoutesType | 'default', ReactNode> = {
    default: <BottomMenuMainContent />,
};
