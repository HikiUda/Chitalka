import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { Container } from '@ui/shared/Container/Container';
import cls from './HeaderLayout.module.scss';

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
