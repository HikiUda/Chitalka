import { FC, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import { Container } from '../Container/Container';
import cls from './Page.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

interface PageProps {
    className?: string;
    children?: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children } = props;

    return (
        <main id="main" className={classNames(className, { [cls.Page]: !isMobile })}>
            <Container>{children}</Container>
        </main>
    );
};
