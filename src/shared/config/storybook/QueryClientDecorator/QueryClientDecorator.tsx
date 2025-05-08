import { Decorator } from '@storybook/react/*';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ClientStateType = 'query' | 'loading' | 'error';
// ? I realy need in error and loading Client
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const errorClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: () => Promise.reject(new Error('Forced error')),
            retry: false,
        },
    },
});

const loadingClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: () => new Promise(() => {}),
            retry: true,
            retryDelay: 100000000000,
        },
    },
});

const clientMap: Record<ClientStateType, QueryClient> = {
    query: queryClient,
    loading: loadingClient,
    error: errorClient,
};
export function QueryClientDecorator(clientState: ClientStateType = 'query'): Decorator {
    return (Story) => {
        return (
            <QueryClientProvider client={clientMap[clientState]}>
                <Story />
            </QueryClientProvider>
        );
    };
}
