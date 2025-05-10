import { FC, useCallback, useEffect, useState } from 'react';
import { ChapterPageContainer } from '../ChapterPageContainer/ChapterPageContainer';
import { ChapterPagesType } from '../../model/types/chapterPage.scheme';
import cls from './ChapterByPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import Image from '@/shared/assets/image/forError/mangaErrorImageFallback.jpg';

interface ChapterByPageProps {
    className?: string;
    data: ChapterPagesType;
    toPrevChapter?: (() => void) | null;
    toNextChapter?: (() => void) | null;
    toManga?: (() => void) | null;
    initialPage?: number;
}

export const ChapterByPage: FC<ChapterByPageProps> = (props) => {
    const { className, data, toPrevChapter, toNextChapter, toManga, initialPage = 0 } = props;

    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageClick = useCallback(
        (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('main')) return;
            const middle = Math.floor(window.innerWidth / 2);
            const middleGap = 50;
            const leftClick = middle - middleGap;
            const rightClick = middle + middleGap;

            if (e.pageX < leftClick) {
                if (currentPage > 0) {
                    setCurrentPage((prev) => (prev -= 1));
                } else if (toPrevChapter) {
                    toPrevChapter();
                } else if (toManga) {
                    toManga();
                }
            }
            if (e.pageX > rightClick) {
                if (currentPage + 1 < data.pageCount) {
                    setCurrentPage((prev) => (prev += 1));
                } else if (toNextChapter) {
                    toNextChapter();
                } else if (toManga) {
                    toManga();
                }
            }
        },
        [currentPage, data.pageCount, toManga, toNextChapter, toPrevChapter],
    );

    useEffect(() => {
        document.addEventListener('click', handlePageClick);

        return () => {
            document.removeEventListener('click', handlePageClick);
        };
    }, [handlePageClick]);

    //TODO handle empty pages
    if (!data.pages.length) return null;

    return (
        <ChapterPageContainer
            maxWidth={data.containerMaxWidth}
            className={classNames(cls.ChapterByPage, {}, [className])}
        >
            <AppImage src={data.pages[currentPage].src} errorFallback={<AppImage src={Image} />} />
        </ChapterPageContainer>
    );
};
