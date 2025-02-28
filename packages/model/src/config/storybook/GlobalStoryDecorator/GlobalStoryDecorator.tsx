import { ThemeDecorator } from '../ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../StyleDecorator/StyleDecorator';
import { MemoryRouterDecorator } from '../RouterDecorator/RouterDecorator';

export const GlobalStoryDecorator = () => {
    return [ThemeDecorator, StyleDecorator, MemoryRouterDecorator()];
};
