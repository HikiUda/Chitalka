import { memo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import ExitSvg from '@packages/ui/src/assets/icon/common/exit.svg';
import { Button } from '@packages/ui/src/shared/Button';
import { Icon } from '@packages/ui/src/shared/Icon';
import { getFlex } from '@packages/ui/src/shared/Stack';

interface ExitButtonProps {
    className?: string;
}

export const ExitButton = memo((props: ExitButtonProps) => {
    const { className } = props;

    return (
        <Button
            theme="fill"
            color="secondary"
            max
            className={classNames('', {}, [className, getFlex()])}
        >
            <Icon Svg={ExitSvg} width={20} height={20} /> Выйти
        </Button>
    );
});
