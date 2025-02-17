import { FC } from 'react';
import { AppRouter } from './providers/router';
import { MainLayout } from '@packages/ui/src/layout/MainLayout/MainLayout';
import { Header } from 'widgets/Header';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    return (
        <MainLayout
            header={<Header />}
            main={<AppRouter />}
        />
    );
};
export default App;
