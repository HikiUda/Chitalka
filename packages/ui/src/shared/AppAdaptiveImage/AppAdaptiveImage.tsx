import { DetailedHTMLProps, HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import errorFallback from '@ui/assets/image/forError/wrong-imageMini..jpg';
import { AppImage } from '@ui/shared/AppImage';
import Skeleton from 'react-loading-skeleton';
import cls from './AppAdaptiveImage.module.scss';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface AppAdaptiveImageProps extends DivProps {
    className?: string;
    img?: string;
    width?: number;
    children?: ReactNode;
}

export const AppAdaptiveImage = memo((props: AppAdaptiveImageProps) => {
    const { className, img, width, children, ...otherProps } = props;

    const height = width && width * 1.33;

    return (
        <div
            {...otherProps}
            style={{ width, height }}
            className={classNames(cls.AppMangaImage, {}, [className])}
        >
            <AppImage
                src={img}
                errorFallback={
                    <AppImage
                        src={errorFallback}
                        alt="error"
                        loadFallback={<Skeleton height="100%" />}
                    />
                }
                loadFallback={<Skeleton height="100%" />}
                alt="manga"
            />
            {children}
        </div>
    );
});
