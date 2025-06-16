import { Suspense, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/layout/MainLayout';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';
import { useSession } from '@/shared/api/session';
import { Loader } from '@/shared/ui/kit/loader';

export const App = () => {
    const [init, setInit] = useState(false);
    const { refreshToken } = useSession();

    useLayoutEffect(() => {
        refreshToken().finally(() => setInit(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!init) return <Loader />;

    return (
        <MainLayout
            header={<Header />}
            main={
                <Suspense fallback={<Loader variant="flower" />}>
                    <Outlet />
                </Suspense>
            }
            bottomMenu={<BottomMenu />}
        />
    );
};
export default App;
