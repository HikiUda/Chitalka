import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { Container } from '@ui/shared/Container/Container';
import cls from './Page.module.scss';

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
