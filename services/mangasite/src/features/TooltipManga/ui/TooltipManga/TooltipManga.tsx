import { FC, lazy, ReactNode } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Tooltip } from '@packages/ui/src/shared/Tooltip';
import { Button } from '@packages/ui/src/shared/Button';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { isMobile } from 'react-device-detect';
import cls from './TooltipManga.module.scss';

const TooltipMangaContent = lazy(() => import('../TooltipMangaContent/TooltipMangaContent'));

interface TooltipMangaProps {
    className?: string;
    trigger?: ReactNode;
    mangaId: MangaIdType;
}

export const TooltipManga: FC<TooltipMangaProps> = (props) => {
    const { className, trigger, mangaId } = props;

    if (isMobile) return trigger;

    return (
        <Tooltip
            delay={1500}
            placement="right"
            trigger={
                <Button className={cls.trigger} theme="clear" noHover>
                    {trigger}
                </Button>
            }
            className={classNames(cls.TooltipManga, {}, [className])}
        >
            <TooltipMangaContent mangaId={mangaId} />
        </Tooltip>
    );
};
