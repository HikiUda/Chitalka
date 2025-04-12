import { FC, useCallback, useEffect, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { TabItem, Tabs } from '@packages/ui/src/shared/Tabs';
import type { MangaIdType } from '@packages/model/src/entities/manga';
import { useSearchParams } from 'react-router-dom';
import cls from './MangaPageContent.module.scss';
import { AboutManga } from '@/widgets/AboutManga';
import { MangaChapters } from '@/widgets/MangaChapters';
import { MangaComments } from '@/widgets/MangaComments';

interface MangaPageContentProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className, mangaId } = props;
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSetSection = useCallback(
        (section: string) => {
            searchParams.set('section', section);
            setSearchParams(searchParams);
        },
        [searchParams, setSearchParams],
    );
    useEffect(() => {
        if (!searchParams.get('section')) {
            handleSetSection('info');
        }
    }, [handleSetSection, searchParams]);

    const tabs: TabItem<string>[] = useMemo(() => {
        return [
            {
                id: 'info',
                title: 'О тайтле',
                content: <AboutManga mangaId={mangaId} />,
            },
            {
                id: 'chapters',
                title: 'Главы',
                content: <MangaChapters />,
            },
            {
                id: 'comments',
                title: 'Комментарии',
                content: <MangaComments />,
            },
        ];
    }, [mangaId]);

    return (
        <div className={classNames(cls.MangaPageContent, {}, [className])}>
            <Tabs
                onSelectionChange={(id) => handleSetSection(id as string)}
                defaultSelectedKey={searchParams.get('section') || 'info'}
                tabs={tabs}
            />
        </div>
    );
};
