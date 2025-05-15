import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Button } from '@/shared/deprecate-ui/Button';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import cls from './StartOrContinueReadButton.module.scss';

interface StartOrContinueReadButtonProps {
    className?: string;
}

export const StartOrContinueReadButton = memo((props: StartOrContinueReadButtonProps) => {
    const { className } = props;

    return (
        <Button
            max
            theme="fill"
            className={classNames(cls.StartOrContinueReadButton, {}, [
                className,
                getFlex({ justify: 'between' }),
            ])}
        >
            <span>Начать читать</span>
            <span>0/565</span>
        </Button>
    );
});
