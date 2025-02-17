import { FC } from 'react';
import { classNames } from '@packages/model/lib/classNames/classNames';
import { useTheme } from '@packages/model/lib/theme/useTheme';
import { HeaderLayout } from '@packages/ui/layout/HeaderLayout/HeaderLayout';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;

    const { toggleTheme } = useTheme();

    return (
        <HeaderLayout className={classNames(cls.Header, {}, [className])}>
            <div>logo</div>
            <div>contnet</div>
            <button
                type="button"
                onClick={toggleTheme}
            >
                toggle theme
            </button>
        </HeaderLayout>
    );
};
