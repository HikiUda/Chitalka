import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames/classNames';
import cls from './HeaderLayout.module.scss';
import { Container } from '../../shared/Container/Container';

interface HeaderLayoutProps {
    className?: string;
    children?: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const { className, children } = props;

    return (
        <header className={classNames(cls.HeaderLayout, {}, [className])}>
            <Container>{children}</Container>
        </header>
    );
};
