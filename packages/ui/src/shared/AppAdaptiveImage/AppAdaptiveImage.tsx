import { DetailedHTMLProps, HTMLAttributes, memo, ReactElement, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import ErrorImg from '@ui/assets/image/forError/wrong-imageMini..jpg';
import { AppImage } from '@ui/shared/AppImage';
import Skeleton from 'react-loading-skeleton';
import cls from './AppAdaptiveImage.module.scss';

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
