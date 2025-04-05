import { ThemeDecorator } from '../ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../StyleDecorator/StyleDecorator';
import { MemoryRouterDecorator } from '../RouterDecorator/RouterDecorator';
import { QueryClientDecorator } from '../QueryClientDecorator/QueryClientDecorator';

export const GlobalStoryDecorator = (queryDev: boolean = true) => {
    return [
        QueryClientDecorator(queryDev),
        ThemeDecorator,
        StyleDecorator,
        MemoryRouterDecorator(),
    ];
};
