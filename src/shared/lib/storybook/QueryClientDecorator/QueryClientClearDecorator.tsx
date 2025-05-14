import { Decorator } from '@storybook/react/*';
import { useQueryClient } from '@tanstack/react-query';

export const QueryClientClearDecorator: Decorator = (Story) => {
    const queryClient = useQueryClient();
    queryClient.clear();
    return <Story />;
};
