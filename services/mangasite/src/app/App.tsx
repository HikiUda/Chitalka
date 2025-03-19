import { FC } from 'react';
import { MainLayout } from '@packages/ui/src/layout/MainLayout/MainLayout';
import { AppRouter } from './providers/router';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    return <MainLayout header={<Header />} main={<AppRouter />} bottomMenu={<BottomMenu />} />;
};
export default App;
