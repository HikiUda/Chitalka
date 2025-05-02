import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames/classNames';
import { Container } from '@ui/shared/Container/Container';
import cls from './HeaderLayout.module.scss';
import { useHideLayout } from './useHideLayout';

interface HeaderLayoutProps {
    className?: string;
    children?: ReactNode;
    mayHide?: boolean;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const { className, children, mayHide = false } = props;

    const { hidden } = useHideLayout(mayHide);

    return (
        <header className={classNames(cls.HeaderLayout, { [cls.hidden]: hidden }, [className])}>
            <Container className={cls.container}>{children}</Container>
        </header>
    );
};
