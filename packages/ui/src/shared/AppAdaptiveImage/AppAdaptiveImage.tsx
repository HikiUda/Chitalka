import { memo, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import errorFallback from '@ui/assets/image/forError/wrong-imageMini..jpg';
import { AppImage } from '@ui/shared/AppImage';
import cls from './AppAdaptiveImage.module.scss';

interface AppAdaptiveImageProps {
    className?: string;
    img?: string;
    width?: number;
    children?: ReactNode;
}

export const AppAdaptiveImage = memo((props: AppAdaptiveImageProps) => {
    const { className, img, width, children } = props;

    const height = width && width * 1.33;

    return (
        <div style={{ width, height }} className={classNames(cls.AppMangaImage, {}, [className])}>
            <AppImage
                src={img}
                errorFallback={<AppImage src={errorFallback} alt="error" />}
                alt="manga"
            />
            {children}
        </div>
    );
});
