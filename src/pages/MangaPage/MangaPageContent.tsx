import { FC } from 'react';
import type { MangaIdType } from '@/shared/kernel/manga';
import { cn } from '@/shared/lib/css';
import { Card } from '@/shared/ui/kit/card';

interface MangaPageContentProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className, mangaId } = props;
    // const [searchParams, setSearchParams] = useSearchParams();

    // const handleSetSection = useCallback(
    //     (section: string) => {
    //         searchParams.set('section', section);
    //         setSearchParams(searchParams);
    //     },
    //     [searchParams, setSearchParams],
    // );
    // useEffect(() => {
    //     if (!searchParams.get('section')) {
    //         handleSetSection('info');
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const tabs: TabItem<string>[] = useMemo(() => {
    //     return [
    //         {
    //             id: 'info',
    //             title: 'О тайтле',
    //             content: <AboutManga mangaId={mangaId} />,
    //         },
    //         {
    //             id: 'chapters',
    //             title: 'Главы',
    //             content: <MangaChapters mangaId={mangaId} />,
    //         },
    //         {
    //             id: 'comments',
    //             title: 'Комментарии',
    //             content: <MangaComments />,
    //         },
    //     ];
    // }, [mangaId]);

    return (
        <Card className={cn('p-0 mt-2 w-full z-5 min-h-100', className)}>
            {/* <Tabs
                onSelectionChange={(id) => handleSetSection(id as string)}
                defaultSelectedKey={searchParams.get('section') || 'info'}
                tabs={tabs}
            /> */}
            lol
        </Card>
    );
};
