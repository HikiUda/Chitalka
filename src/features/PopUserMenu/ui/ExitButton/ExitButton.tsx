import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import ExitSvg from '@/shared/assets/icon/common/exit.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { getFlex } from '@/shared/ui/Stack';
import { useLogoutQuery } from '@/shared/api/auth';

interface ExitButtonProps {
    className?: string;
}

export const ExitButton = memo((props: ExitButtonProps) => {
    const { className } = props;

    const { logout } = useLogoutQuery();

    return (
        <Button
            onPress={() => logout()}
            theme="fill"
            color="secondary"
            max
            className={classNames('', {}, [className, getFlex()])}
        >
            <Icon Svg={ExitSvg} width={20} height={20} /> Выйти
        </Button>
    );
});
