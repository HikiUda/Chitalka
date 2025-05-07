import { ThemeDecorator } from '../ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../StyleDecorator/StyleDecorator';
import { MemoryRouterDecorator } from '../RouterDecorator/RouterDecorator';
import { QueryClientDecorator } from '../QueryClientDecorator/QueryClientDecorator';
import { QueryClientClearDecorator } from '../QueryClientDecorator/QueryClientClearDecorator';

export const GlobalStoryDecorator = () => {
    return [
        QueryClientClearDecorator,
        QueryClientDecorator(),
        ThemeDecorator,
        StyleDecorator,
        MemoryRouterDecorator(),
    ];
};
