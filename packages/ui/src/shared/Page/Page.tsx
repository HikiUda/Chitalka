import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './Page.module.scss';
import { Container } from '../../shared/Container/Container';

interface PageProps {
    className?: string;
    children?: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children } = props;

    return (
        <main className={classNames(cls.Page, {}, [className])}>
            <Container>{children}</Container>
        </main>
    );
};
