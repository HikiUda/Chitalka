import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createZustandStoreSelectors } from '@/shared/lib/helpers/createZustandStoreSelectors';

type ChapterViewType = 'byPage' | 'tape';

interface ReadSettingsStoreType {
    chapterView: ChapterViewType;
    setChapterView: (chapterView: ChapterViewType) => void;
    containerMaxWidth: number;
    setContainerMaxWidth: (containerMaxWidth: number) => void;
}

const useReadSettingsStoreBase = create<ReadSettingsStoreType>()(
    devtools(
        (set) => ({
            chapterView: 'byPage',
            setChapterView: (chapterView: ChapterViewType) =>
                set(() => ({ chapterView }), false, 'ReadSettingsStore/setChapterView'),
            containerMaxWidth: 0,
            setContainerMaxWidth: (containerMaxWidth: number) =>
                set(() => ({ containerMaxWidth }), false, 'ReadSettingsStore/setContainerMaxWidth'),
        }),
        { name: 'ReadSettingsStore' },
    ),
);

export const useReadSettingsStore = createZustandStoreSelectors(useReadSettingsStoreBase);
