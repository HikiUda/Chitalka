import { ReactNode } from 'react';
import { QueryClientProvider } from './queryClientProvider';
import ErrorBoundary from './ErrorBoundary';
import { AppThemeProvider } from '@/shared/kernel/theme';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider>
            <ErrorBoundary>
                <AppThemeProvider>{children}</AppThemeProvider>
            </ErrorBoundary>
        </QueryClientProvider>
    );
};
