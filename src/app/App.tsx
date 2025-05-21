import { FC, useLayoutEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AppRouter } from './providers/router/AppRouter';
import { MainProvider } from './providers/mainProvider';
import { MainLayout } from '@/shared/layout/MainLayout/MainLayout';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';
import { useSession } from '@/shared/api/session';
import { Loader } from '@/shared/deprecate-ui/Loader';

interface AppProps {
    className?: string;
}

const AppInit = () => {
    const user = useQuery(UserDataApi.getUserDataQueryOptions());
    const [init, setInit] = useState(false);
    const refreshToken = useSession((s) => s.refreshToken);

    useLayoutEffect(() => {
        refreshToken().finally(() => setInit(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!init) return <Loader />;

    return <MainLayout header={<Header />} main={<AppRouter />} bottomMenu={<BottomMenu />} />;
};

export const App: FC<AppProps> = () => {
    return (
        <MainProvider>
            <AppInit />
        </MainProvider>
    );
};
export default App;
