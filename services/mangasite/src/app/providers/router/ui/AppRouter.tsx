import { routerConfig } from '../model/routerConfig';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};
