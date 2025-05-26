import { cn } from '@/shared/lib/css';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';

interface BannerProps {
    className?: string;
    banner: string | null;
}

export const Banner = (props: BannerProps) => {
    const { className, banner } = props;

    return (
        <AppAdaptiveImage
            img={banner}
            className={cn(
                'min-h-90 before:z-1 before:absolute before:inset-0 before:bg-linear-to-t before:from-white dark:before:from-black',
                className,
            )}
        />
    );
};
