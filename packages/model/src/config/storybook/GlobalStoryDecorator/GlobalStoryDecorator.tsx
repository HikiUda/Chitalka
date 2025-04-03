import { ThemeDecorator } from '../ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../StyleDecorator/StyleDecorator';
import { MemoryRouterDecorator } from '../RouterDecorator/RouterDecorator';
import { QueryClientDecorator } from '../QueryClientDecorator/QueryClientDecorator';

export const GlobalStoryDecorator = () => {
    return [QueryClientDecorator(), ThemeDecorator, StyleDecorator, MemoryRouterDecorator()];
};
