import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';

interface QueryClientProviderProps {
    children: ReactNode;
}
const queryClient = new QueryClient();
export const MyQueryClientProvider: FC<QueryClientProviderProps> = (props) => {
    const { children } = props;

    return (
        <QueryClientProvider client={queryClient}>
            {children} <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
