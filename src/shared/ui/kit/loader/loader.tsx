import { cva, VariantProps } from 'class-variance-authority';
import cls from './loader.module.css';
import { cn } from '@/shared/lib/css';

export const loaderVariants = cva('w-12', {
    variants: {
        variant: {
            flower: cls.flower,
            spinner: cls.spinner,
        },
    },
    defaultVariants: {
        variant: 'spinner',
    },
});

type LoaderProps = {
    className?: string;
} & VariantProps<typeof loaderVariants>;

export const Loader = (props: LoaderProps) => {
    const { className, variant } = props;

    return <div className={cn(loaderVariants({ variant }), className)} />;
};
