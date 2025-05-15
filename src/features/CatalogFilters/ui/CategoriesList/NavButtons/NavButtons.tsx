import { FC } from 'react';
import cls from './NavButtons.module.scss';
import { getFlex, HStack } from '@/shared/deprecate-ui/Stack';
import { Button } from '@/shared/deprecate-ui/Button';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';

interface NavButtonsProps {
    className?: string;
    title?: string;
    onBack?: () => void;
    onReset?: () => void;
}

export const NavButtons: FC<NavButtonsProps> = (props) => {
    const { className, title, onBack, onReset } = props;

    return (
        <HStack justify="between" max className={className}>
            <Button theme="clear" noHover onPress={onBack} className={getFlex()}>
                <Icon className={cls.arrow} Svg={ArrowSvg} size={15} />
                {title}
            </Button>
            <Button theme="clear" noHover onPress={onReset}>
                сбросить
            </Button>
        </HStack>
    );
};
