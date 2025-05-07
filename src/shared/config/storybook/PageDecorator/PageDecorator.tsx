import { Decorator } from '@storybook/react';
import { ReactNode } from 'react';
import { MainLayout } from '@/shared/layout/MainLayout/MainLayout';

export function PageDecorator(header?: ReactNode, footer?: ReactNode): Decorator {
    return (Story) => <MainLayout header={header} main={<Story />} footer={footer} />;
}
