import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import ExitSvg from '@/shared/assets/icon/common/exit.svg?react';
import { Button } from '@/shared/deprecate-ui/Button';
import { Icon } from '@/shared/deprecate-ui/Icon';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { useLogoutQuery } from '@/shared/api/deprecated/auth';

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
