import { FC } from 'react';
import { MainLayout } from '@packages/ui/src/layout/MainLayout/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { UserDataApi } from '@packages/model/src/api/auth';
import { AppRouter } from './providers/router';
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
