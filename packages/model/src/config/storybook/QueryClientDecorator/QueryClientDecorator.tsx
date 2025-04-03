import { Decorator } from '@storybook/react/*';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
export function QueryClientDecorator(): Decorator {
    return (Story) => (
        <QueryClientProvider client={queryClient}>
            <Story />
        </QueryClientProvider>
    );
}
