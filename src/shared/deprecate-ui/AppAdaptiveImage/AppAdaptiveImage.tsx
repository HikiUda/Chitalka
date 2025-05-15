import { DetailedHTMLProps, HTMLAttributes, memo, ReactElement, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import { AppImage } from '../AppImage';
import cls from './AppAdaptiveImage.module.scss';
import ErrorImg from '@/shared/assets/image/forError/wrong-imageMini..jpg';
import { classNames } from '@/shared/lib/helpers/classNames';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface AppAdaptiveImageProps extends DivProps {
    className?: string;
    img?: string | null;
    width?: number;
    children?: ReactNode;
    loadFallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppAdaptiveImage = memo((props: AppAdaptiveImageProps) => {
    const { className, img, width, children, loadFallback, errorFallback, ...otherProps } = props;

    const height = width && width * 1.33;
    return (
        <div
            {...otherProps}
            style={{ width, height }}
            className={classNames(cls.AppMangaImage, {}, [className])}
        >
            <AppImage
                src={img || ''}
                errorFallback={
                    <AppImage
                        src={errorFallback || ErrorImg}
                        alt="error"
                        loadFallback={loadFallback || <Skeleton height="100%" />}
                    />
                }
                loadFallback={loadFallback || <Skeleton height="100%" />}
                alt="manga"
            />
            {children}
        </div>
    );
});
