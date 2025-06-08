import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CircleHelpIcon } from 'lucide-react';
import cls from './ReadChapterBottomMenu.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/deprecate-ui/Stack';
import { PathParams, Routes } from '@/shared/kernel/router';
import { BottomMenuLayout } from '@/shared/ui/layout/BottomMenuLayout';
import { ChaptersNavigation } from '@/features/MangaChapters';
import { LogoMangaSite } from '@/entities/Logo';
import { useHideLayout } from '@/shared/ui/layout/useHideLayout';

interface ReadChapterBottomMenuProps {
    className?: string;
}

export const ReadChapterBottomMenu: FC<ReadChapterBottomMenuProps> = (props) => {
    const { className } = props;

    const { hidden } = useHideLayout();
    const { mangaId, chapterId } = useParams<PathParams[typeof Routes.MANGA_READ]>();
    if (!mangaId || !chapterId) return null;

    return (
        <BottomMenuLayout hidden={hidden} className={classNames(cls.BottomMenu, {}, [className])}>
            <HStack justify="between">
                <LogoMangaSite />
                <ChaptersNavigation mangaId={mangaId} chapterId={chapterId} />
                <CircleHelpIcon size={30} className="stroke-primary" />
            </HStack>
        </BottomMenuLayout>
    );
};
