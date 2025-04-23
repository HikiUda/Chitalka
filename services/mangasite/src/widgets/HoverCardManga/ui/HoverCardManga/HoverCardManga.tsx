import { FC, lazy, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { HoveredCard } from '@packages/ui/src/shared/HoveredCard';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { isMobile } from 'react-device-detect';
import cls from './HoverCardManga.module.scss';

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
