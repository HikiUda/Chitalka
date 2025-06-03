import { ReactNode, Suspense } from 'react';
import { QueryClientProvider } from './queryClient';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import { AppThemeProvider } from '@/shared/kernel/theme';
import { Loader } from '@/shared/ui/kit/loader';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider>
            <ErrorBoundary>
                <AppThemeProvider>
                    <Suspense fallback={<Loader variant="flower" />}>{children}</Suspense>
                </AppThemeProvider>
            </ErrorBoundary>
        </QueryClientProvider>
    );
};
