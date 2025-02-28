import { Decorator } from '@storybook/react';
import { MainLayout } from '@packages/ui/src/layout/MainLayout/MainLayout';
import { ReactNode } from 'react';

export function PageDecorator(header?: ReactNode, footer?: ReactNode): Decorator {
    return (Story) => <MainLayout header={header} main={<Story />} footer={footer} />;
}
