import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { isMobile } from 'react-device-detect';
import cls from './ButtonBlock.module.scss';
import { StartOrContinueReadButton } from '@/features/StartOrContinueReadButton';
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
            <StartOrContinueReadButton />
            <AddMangaToBookmarks mangaId={mangaId} />
        </div>
    );
});
