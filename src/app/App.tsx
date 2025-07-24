import { Suspense, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { MainLayout } from '@/shared/ui/layout/MainLayout';
import { Header } from '@/widgets/Header';
import { BottomMenu } from '@/widgets/BottomMenu';
import { useSession } from '@/shared/kernel/session';
import { Loader } from '@/shared/ui/kit/loader';

export const App = () => {
    const [init, setInit] = useState(false);
    const { refreshToken } = useSession();

    useLayoutEffect(() => {
        refreshToken().finally(() => setInit(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!init) return <Loader variant="flower" />;
    return (
        <Suspense fallback={<Loader variant="flower" />}>
            <MainLayout
                header={<Header />}
                main={<Outlet />}
                bottomMenu={<BottomMenu />}
                toaster={<Toaster />}
            />
        </Suspense>
    );
};
export default App;
