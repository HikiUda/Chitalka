import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './Loader.module.scss';

type Loaders = 'opacitySpinner' | 'flower';

interface LoaderProps {
    className?: string;
    width?: string | number;
    loader?: Loaders;
}

export const Loader = memo((props: LoaderProps) => {
    const { className, width = 50, loader = 'opacitySpinner' } = props;

    return <div style={{ width }} className={classNames(cls[loader], {}, [className])} />;
});
