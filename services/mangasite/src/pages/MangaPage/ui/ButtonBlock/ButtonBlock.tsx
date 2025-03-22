import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import cls from './ButtonBlock.module.scss';

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
            <Button theme="fill" max color="primary">
                Начать читать
            </Button>
            <Button theme="fill" max color="secondary">
                Начать читать
            </Button>
        </div>
    );
});
