import { FC } from 'react';
import { getFlex, HStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
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
