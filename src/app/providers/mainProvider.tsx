import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { QueryClientProvider } from './queryClient';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import { AppThemeProvider } from '@/shared/config/theme';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider>
                <ErrorBoundary>
                    <AppThemeProvider>{children}</AppThemeProvider>
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
