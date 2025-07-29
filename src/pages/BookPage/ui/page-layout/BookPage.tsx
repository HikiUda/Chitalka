import { ReactNode } from 'react';
import cls from './layout.module.css';
import { Page } from '@/shared/ui/layout/Page';
import { cn } from '@/shared/lib/css';
import { useWindowSize } from '@/shared/kernel/useWindowSize';
import { AppAdaptiveImage } from '@/shared/ui/AppAdaptiveImage';

type BookPageProps = {
    banner: { banner: string | null; cover: string | null };
    cover: ReactNode;
    title: ReactNode;
    rating: ReactNode;
    buttons: ReactNode;
    sidebar: ReactNode;
    content: ReactNode;
};

export const BookPage = (props: BookPageProps) => {
    const { banner, cover, title, rating, buttons, sidebar, content } = props;
    const isWidthLg = useWindowSize.use.isWidthLg();

    return (
        <Page>
            <div
                className={cn(
                    !isWidthLg
                        ? 'relative flex flex-col gap-1 pt-10 items-center'
                        : `${cls.gridTemplete} grid gap-4`,
                )}
            >
                {/* Banner */}
                {(banner.banner || !isWidthLg) && (
                    <AppAdaptiveImage
                        img={banner.banner || banner.cover}
                        className={cn(
                            cls.banner,
                            'min-h-90 before:z-1 before:absolute before:inset-0 before:bg-linear-to-t before:from-white dark:before:from-black',
                            !isWidthLg ? 'absolute top-0 left-0 right-0 h-162' : '-mx-4',
                        )}
                    />
                )}
                {/* Banner */}

                {/* Cover */}
                <div className={cn(cls.cover, `z-2`, !isWidthLg && 'mb-2 w-45')}>{cover}</div>
                {/* Cover */}

                {/* Title */}
                <div
                    className={cn(
                        cls.title,
                        'flex z-2 mb-2',
                        !isWidthLg
                            ? 'flex-col-reverse items-center gap-6'
                            : 'gap-20 w-full justify-between items-end',
                    )}
                >
                    {title}
                    {rating}
                </div>
                {/* Title */}

                {/* Buttons */}
                <div
                    className={cn(
                        cls.buttons,
                        'flex flex-col w-full justify-center items-center max-w-70 grow z-4 gap-1',
                        !isWidthLg && 'px-1 mb-2',
                    )}
                >
                    {buttons}
                </div>
                {/* Buttons */}

                {/* Sidebar */}
                {isWidthLg && (
                    <div
                        className={cn(
                            cls.sidebar,
                            'flex flex-col justify-start items-start overflow-auto max-h-125 gap-4 p-3 bg-card shadow-sm rounded-lg',
                        )}
                    >
                        {sidebar}
                    </div>
                )}
                {/* Sidebar */}

                {/* Content */}
                <div
                    className={cn(
                        cls.content,
                        'bg-card shadow-sm rounded-lg pb-3 w-full z-5 min-h-100',
                    )}
                >
                    {content}
                </div>
                {/* Content */}
            </div>
        </Page>
    );
};
