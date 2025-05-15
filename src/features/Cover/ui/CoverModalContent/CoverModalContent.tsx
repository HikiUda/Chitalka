import { memo, useMemo } from 'react';
import { AppAdaptiveImage } from '@/shared/deprecate-ui/AppAdaptiveImage';
import { useQuery } from '@tanstack/react-query';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import Skeleton from 'react-loading-skeleton';
import { Loader } from '@/shared/deprecate-ui/Loader';
import { MangaCoverApi } from '../../model/api/mangaCoversApi';
import cls from './CoverModalContent.module.scss';
import { PaginationSlider } from '@/entities/Slider';

interface CoverModalContentProps {
    mangaId: number;
}

const CoverModalContent = memo(({ mangaId }: CoverModalContentProps) => {
    const {
        data: covers,
        isLoading,
        isError,
    } = useQuery(MangaCoverApi.getCoversQueryOptions(mangaId));
    const slides = useMemo(() => {
        if (!covers) return [];
        return covers.map((cover) => (
            <AppAdaptiveImage
                key={cover.id}
                img={cover.cover}
                className={cls.slide}
                loadFallback={
                    <Skeleton
                        style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }}
                    />
                }
            />
        ));
    }, [covers]);

    if (isLoading)
        return (
            <div className={getFlex()}>
                <Loader width={200} loader="flower" />
            </div>
        );
    if (!slides.length || isError)
        return (
            <AppAdaptiveImage
                img={null}
                className={cls.slide}
                loadFallback={
                    <Skeleton
                        style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }}
                    />
                }
            />
        );
    return <PaginationSlider slides={slides} />;
});

export default CoverModalContent;
