import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { QueryClientProvider } from '../queryClient';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { ThemeProvider } from '../theme';

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
