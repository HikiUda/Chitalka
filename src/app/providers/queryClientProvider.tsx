import { QueryClientProvider as QueryClientProviderPrimitive } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { queryClient } from '@/shared/api/queryClient';

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProviderPrimitive client={queryClient}>
            {children} <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProviderPrimitive>
    );
};
