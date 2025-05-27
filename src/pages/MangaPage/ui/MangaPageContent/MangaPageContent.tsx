import { FC } from 'react';
import { useMangaPageContent } from '../../model/useMangaPageContent';
import type { MangaIdType } from '@/shared/kernel/manga';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/kit/tabs';

interface MangaPageContentProps {
    className?: string;
    mangaId: MangaIdType;
}

export const MangaPageContent: FC<MangaPageContentProps> = (props) => {
    const { className, mangaId } = props;
    const { tabs } = useMangaPageContent(mangaId);
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

    return (
        <Tabs className={className} defaultValue="info">
            <TabsList className="w-full justify-start">
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
};
