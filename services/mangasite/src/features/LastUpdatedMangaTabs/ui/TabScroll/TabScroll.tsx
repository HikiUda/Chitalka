import { FC, ReactNode } from 'react';
import { Button } from '@packages/ui/src/shared/Button';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import cls from './TabScroll.module.scss';

interface TabScrollProps {
    className?: string;
    children?: ReactNode;
    callback?: () => void;
    disabled?: boolean;
    searchParams?: string;
}

export const TabScroll: FC<TabScrollProps> = (props) => {
    const { className, children, callback, disabled, searchParams = '' } = props;

    return (
        <div className={className}>
            {children}

            {!disabled ? (
                <Button
                    max
                    onPress={() => !disabled && setTimeout(() => callback?.(), 200)}
                    theme="fill"
                >
                    Показать еще
                </Button>
            ) : (
                <AppLink className={cls.link} to={`${getMangaSiteRoute.catalog()}?${searchParams}`}>
                    В Каталог
                </AppLink>
            )}
        </div>
    );
};
