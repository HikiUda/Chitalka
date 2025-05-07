import { FC } from 'react';
import { getFlex, HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg';
import { Icon } from '@/shared/ui/Icon';
import cls from './NavButtons.module.scss';

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
