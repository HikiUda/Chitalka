import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@model/config/theme';
import { ReactNode } from 'react';
import { QueryClientProvider } from '../queryClient';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider>
                <ErrorBoundary>
                    <ThemeProvider>{children}</ThemeProvider>
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
