import { FC, ReactNode } from 'react';
import cls from './HeaderLayout.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Container } from '@/shared/ui/Container/Container';

interface HeaderLayoutProps {
    className?: string;
    children?: ReactNode;
    hidden?: boolean;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const { className, children, hidden = false } = props;

    return (
        <header className={classNames(cls.HeaderLayout, { [cls.hidden]: hidden }, [className])}>
            <Container className={cls.container}>{children}</Container>
        </header>
    );
};
