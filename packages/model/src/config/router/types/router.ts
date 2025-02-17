import { RouteProps } from 'react-router-dom';
import type { ValueOf } from '../../../types/common/common';
import { MangaSiteRoutes } from '../const/mangasite';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};

export type MangaSiteRoutesType = ValueOf<typeof MangaSiteRoutes>;
