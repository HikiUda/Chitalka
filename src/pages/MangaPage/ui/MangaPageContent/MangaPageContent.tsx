import { FC, useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AboutManga } from '../AboutManga';
import cls from './MangaPageContent.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import type { MangaIdType } from '@/shared/kernel/manga';
import { MangaChapters } from '@/features/MangaChapters';
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                content: <MangaChapters mangaId={mangaId} />,
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
