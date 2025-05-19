import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AppRouter } from './providers/router/AppRouter';
import { MainLayout } from '@/shared/layout/MainLayout/MainLayout';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';
import { useSession } from '@/shared/api/session';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    useSession((state) => state.refreshToken)();
    const user = useQuery(UserDataApi.getUserDataQueryOptions());
    //TODO loader
    //if (user.isLoading) return <div>Loading...</div>;

    return <MainLayout header={<Header />} main={<AppRouter />} bottomMenu={<BottomMenu />} />;
};
export default App;
