import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import cls from './ButtonBlock.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { ContinueReadMangaButton } from '@/features/ContinueReadManga';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';

interface ButtonBlockProps {
    className?: string;
    mangaId: number;
}

export const ButtonBlock = memo((props: ButtonBlockProps) => {
    const { className, mangaId } = props;

    return (
        <div
            className={classNames(cls.ButtonBlock, { [cls.mobile]: isMobile }, [
                className,
                getFlex({ direction: 'column', max: true }),
            ])}
        >
            <ContinueReadMangaButton className="w-full" />
            <AddMangaToBookmarks className="w-full" mangaId={mangaId} />
        </div>
    );
});
