import { FC, lazy, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import cls from './HoverCardManga.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { HoveredCard } from '@/shared/ui/HoveredCard';
import { MangaIdType } from '@/shared/entities/manga';

const HoverCardMangaContent = lazy(() => import('../HoverCardMangaContent/HoverCardMangaContent'));

interface HoverCardMangaProps {
    className?: string;
    trigger?: ReactNode;
    mangaId: MangaIdType;
}

export const HoverCardManga: FC<HoverCardMangaProps> = (props) => {
    const { className, trigger, mangaId } = props;

    if (isMobile) return trigger;

    return (
        <HoveredCard
            openDelay={1000}
            closeDelay={700}
            trigger={trigger}
            contentProps={{ side: 'right' }}
            className={classNames(cls.HoverCardManga, {}, [className])}
        >
            <HoverCardMangaContent mangaId={mangaId} />
        </HoveredCard>
    );
};
