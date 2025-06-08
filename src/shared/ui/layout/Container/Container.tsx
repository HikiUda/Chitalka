import { FC, ReactNode } from 'react';
import cls from './Container.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
    const { children, className } = props;

    return <div className={classNames(cls.Container, {}, [className])}>{children}</div>;
};
