import { Decorator } from '@storybook/react/*';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
export function QueryClientDecorator(withDevTools: boolean = true): Decorator {
    return (Story) => (
        <QueryClientProvider client={queryClient}>
            <Story />
            {withDevTools && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
}
