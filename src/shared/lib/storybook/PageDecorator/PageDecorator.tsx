import { Decorator } from '@storybook/react';
import { ReactNode } from 'react';
import { MainLayout } from '@/shared/ui/layout/MainLayout/MainLayout';

export function PageDecorator(
    header?: ReactNode,
    footer?: ReactNode,
    bottomMenu?: ReactNode,
): Decorator {
    return (Story) => (
        <MainLayout header={header} main={<Story />} footer={footer} bottomMenu={bottomMenu} />
    );
}
