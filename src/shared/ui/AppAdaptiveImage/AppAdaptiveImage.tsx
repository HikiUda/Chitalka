import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { AppImage } from '../AppImage';
import { Skeleton } from '../kit/skeleton';
import ErrorImg from '@/shared/assets/image/forError/wrong-imageMini..jpg';
import { cn } from '@/shared/lib/css';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface AppAdaptiveImageProps extends DivProps {
    className?: string;
    img?: string;
    children?: ReactNode;
    loadFallback?: ReactElement;
    errorFallback?: ReactElement;
    errorFallbackImg?: string;
}

export const AppAdaptiveImage = (props: AppAdaptiveImageProps) => {
    const {
        className,
        img,
        children,
        loadFallback,
        errorFallback,
        errorFallbackImg,
        ...otherProps
    } = props;

    return (
        <div {...otherProps} className={cn('relative', className)}>
            <AppImage
                className="absolute inset-0 w-full h-full object-cover rounded-md"
                src={img}
                errorFallback={
                    errorFallback || (
                        <AppImage
                            className="absolute inset-0 w-full h-full object-cover rounded-md"
                            src={errorFallbackImg || ErrorImg}
                            alt="error"
                            loadFallback={loadFallback || <Skeleton className="h-full w-full" />}
                        />
                    )
                }
                loadFallback={loadFallback || <Skeleton className="h-full w-full" />}
                alt="manga"
            />
            {children}
        </div>
    );
};
