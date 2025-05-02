import { FC, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
    const { children, className } = props;

    return <div className={classNames(cls.Container, {}, [className])}>{children}</div>;
};
