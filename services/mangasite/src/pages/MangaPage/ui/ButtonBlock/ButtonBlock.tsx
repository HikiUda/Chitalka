import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import cls from './ButtonBlock.module.scss';
import { StartOrContinueReadButton } from '@/features/StartOrContinueReadButton';
import { AddMangaToBookmarks } from '@/features/AddMangaToBookmarks';

interface ButtonBlockProps {
    className?: string;
}

export const ButtonBlock = memo((props: ButtonBlockProps) => {
    const { className } = props;

    return (
        <div
            className={classNames(cls.ButtonBlock, {}, [
                className,
                getFlex({ direction: 'column', max: true }),
            ])}
        >
            <StartOrContinueReadButton />
            <AddMangaToBookmarks />
        </div>
    );
});
