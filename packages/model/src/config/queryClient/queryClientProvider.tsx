import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';
import { z } from 'zod';

interface QueryClientProviderProps {
    children: ReactNode;
}
//TODO set styleTime more
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError(error) {
                if (error instanceof z.ZodError) return true;
                return false;
            },
        },
        mutations: {
            throwOnError(error) {
                if (error instanceof z.ZodError) return true;
                return false;
            },
        },
    },
});
export const MyQueryClientProvider: FC<QueryClientProviderProps> = (props) => {
    const { children } = props;

    return (
        <QueryClientProvider client={queryClient}>
            {children} <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
