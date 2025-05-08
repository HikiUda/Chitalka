import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AppRouter } from './providers/router/AppRouter';
import { MainLayout } from '@/shared/layout/MainLayout/MainLayout';
import { UserDataApi } from '@/shared/api/user';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    const user = useQuery(UserDataApi.getUserDataQueryOptions());
    //TODO loader
    //if (user.isLoading) return <div>Loading...</div>;

    return <MainLayout header={<Header />} main={<AppRouter />} bottomMenu={<BottomMenu />} />;
};
export default App;
