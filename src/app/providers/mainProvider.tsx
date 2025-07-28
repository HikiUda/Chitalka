import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from './queryClientProvider';

export const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider>
            <ErrorBoundary fallback={<div>This is global error</div>}>{children}</ErrorBoundary>
        </QueryClientProvider>
    );
};
