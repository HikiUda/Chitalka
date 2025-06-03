import { FC, useLayoutEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '@/shared/layout/MainLayout/MainLayout';
import { UserDataApi } from '@/shared/api/deprecated/user';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';
import { useSession } from '@/shared/api/session';
import { Loader } from '@/shared/deprecate-ui/Loader';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    const user = useQuery(UserDataApi.getUserDataQueryOptions());
    const [init, setInit] = useState(false);
    const { refreshToken } = useSession();

    useLayoutEffect(() => {
        refreshToken().finally(() => setInit(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!init) return <Loader />;

    return <MainLayout header={<Header />} main={<Outlet />} bottomMenu={<BottomMenu />} />;
};
export default App;
