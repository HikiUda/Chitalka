import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    loadFallback?: ReactElement;
    errorFallback?: ReactElement;
}

//TODO throw env
const BASE_S3_URL = 'http://localhost:8000/';

function getFinalSrc(src?: string): string | undefined {
    if (!src) return undefined;

    // 1. Абсолютные URL
    if (/^https?:\/\//.test(src)) return src;

    // 2. Локальные ассеты (импортированные как URL-строка или из /public)
    if (src.startsWith('/') || src.startsWith('data:')) return src;

    // 3. Относительные пути от бэка (например: 'images/covers/123.jpg')
    return `${BASE_S3_URL}/${src}`;
}

export const AppImage = memo((props: ImageProps) => {
    const { className, loadFallback, errorFallback, src, ...otherProps } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const finalSrc = getFinalSrc(src);

    useLayoutEffect(() => {
        if (!finalSrc) {
            setIsLoading(false);
            setError(true);
            return;
        }
        setIsLoading(true);
        setError(false);
        const img = new Image();
        img.src = finalSrc;
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setError(true);
        };
    }, [finalSrc]);

    if (isLoading && loadFallback) {
        return loadFallback;
    }
    if (error && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={finalSrc} {...otherProps} />;
});
