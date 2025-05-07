import { RouteProps } from 'react-router-dom';
import { MangaSiteRoutes } from '../const/mangasite';
import type { ValueOf } from '@/shared/types/common/common';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};

export type MangaSiteRoutesType = ValueOf<typeof MangaSiteRoutes>;

export type RouteID = string | number;
