import { memo } from 'react';
import { isMobile } from 'react-device-detect';
import cls from './ButtonBlock.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { StartOrContinueReadButton } from '@/features/StartOrContinueReadButton';
import { AddMangaToBookmarks } from '@/features/individualManga';

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
            <AddMangaToBookmarks className="w-full" mangaId={mangaId} />
        </div>
    );
});
