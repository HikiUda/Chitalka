import { ReactNode } from 'react';
import { MangaChapters } from '../ui/MangaPageContent/MangaChapters';
import { MangaComments } from '../ui/MangaPageContent/MangaComments';
import { MangaIdType } from '@/shared/kernel/manga';
import { lazyImport } from '@/shared/lib/helpers/lazyImport';

const AboutManga = lazyImport(() => import('../ui/MangaPageContent/AboutManga'), 'AboutManga');

type MangaContentTabValues = ['info', 'chapters', 'comments'];

type CreateMangaContentTabs<T extends string[]> = T extends [
    infer Tab,
    ...infer Tail extends string[],
]
    ? [
          {
              value: Tab;
              title: string;
              content: ReactNode;
          },
          ...CreateMangaContentTabs<Tail>,
      ]
    : [];

type MangaContentTabs = CreateMangaContentTabs<MangaContentTabValues>;

export function useMangaPageContent(mangaId: MangaIdType): {
    tabs: MangaContentTabs;
    defaultTab: MangaContentTabValues[number];
} {
    return {
        defaultTab: 'info',
        tabs: [
            {
                value: 'info',
                title: 'О тайтле',
                content: <AboutManga mangaId={mangaId} />,
            },
            {
                value: 'chapters',
                title: 'Главы',
                content: <MangaChapters />,
            },
            {
                value: 'comments',
                title: 'Комментарии',
                content: <MangaComments />,
            },
        ],
    };
}
