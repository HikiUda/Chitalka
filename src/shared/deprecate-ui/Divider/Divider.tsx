import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Divider.module.scss';

type DividerColor = 'primary' | 'secondary' | 'text';

interface DividerProps {
    color?: DividerColor;
}

export const Divider = memo((props: DividerProps) => {
    const { color = 'primary' } = props;

    return <div className={classNames(cls.Divider, {}, [cls[color]])} />;
});
