import { memo, useMemo } from 'react';
import { AppAdaptiveImage } from '@packages/ui/src/shared/AppAdaptiveImage';
import { PaginationSlider } from '@packages/ui/src/entities/Slider';
import { useGetMangaCovers } from '../../model/api/useGetMangaCovers';
import cls from './CoverModalContent.module.scss';

interface CoverModalContentProps {
    mangaId: number;
}

const CoverModalContent = memo(({ mangaId }: CoverModalContentProps) => {
    //TODO loader
    const { data: covers, isLoading } = useGetMangaCovers(mangaId);
    const slides = useMemo(() => {
        if (!covers && isLoading) return [<div key={0} className={cls.loader} />];
        if (!covers) return [];
        return covers.map((cover) => (
            <AppAdaptiveImage key={cover.id} img={cover.cover} className={cls.slide} />
        ));
    }, [covers, isLoading]);
    return <PaginationSlider slides={slides} />;
});

export default CoverModalContent;
