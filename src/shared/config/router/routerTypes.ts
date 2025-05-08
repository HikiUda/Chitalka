import { RouteProps } from 'react-router-dom';
import { RoutesConst } from './routesConst';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export type RoutesConstType = ValueOf<typeof RoutesConst>;

export type RouteID = string | number;
