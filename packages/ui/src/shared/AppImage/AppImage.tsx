import { classNames } from '@packages/model/src/lib/classNames';
import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    loadFallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: ImageProps) => {
    const { className, loadFallback, errorFallback, src, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setError(true);
        };
    });

    if (isLoading && loadFallback) {
        return loadFallback;
    }

    if (error && errorFallback) {
        return errorFallback;
    }

    return <img className={classNames('', {}, [className])} src={src || 'error'} {...otherProps} />;
});
