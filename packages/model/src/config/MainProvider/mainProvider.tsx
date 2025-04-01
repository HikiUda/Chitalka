import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@model/lib/theme';
import { ReactNode } from 'react';
import { QueryClientProvider } from '../queryClient';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
