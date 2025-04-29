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
        img.src = src?.match(/https?:\/\//i) ? src : 'http://localhost:8000/' + src;
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

    return (
        <img
            className={className}
            src={src?.match(/https?:\/\//i) ? src : 'http://localhost:8000/' + src}
            {...otherProps}
        />
    );
});
