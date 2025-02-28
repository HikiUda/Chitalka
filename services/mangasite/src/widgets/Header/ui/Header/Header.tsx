import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { useDisign, useTheme } from '@packages/model/src/lib/theme';
import { LogoMangaSite } from '@packages/ui/src/entities/Logo';
import { HStack } from '@packages/ui/src/shared/Stack';
import { HeaderLayout } from '@packages/ui/src/layout/HeaderLayout';
import { HeaderItems } from '../HeaderItems/HeaderItems';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    const { toggleTheme } = useTheme();
    const { toggleDisign } = useDisign();

    const onDisign = () => {
        toggleDisign();
    };

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            <HStack justify="between">
                <LogoMangaSite />
                <HeaderItems />
                <HStack>
                    <button type="button" onClick={toggleTheme}>
                        toggle theme
                    </button>
                    <button type="button" onClick={onDisign}>
                        toggle disign
                    </button>
                </HStack>
            </HStack>
        </HeaderLayout>
    );
};
