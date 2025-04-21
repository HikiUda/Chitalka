import { FC, ReactNode, useMemo } from 'react';
import { Button } from '@packages/ui/src/shared/Button';
import { VStack } from '@packages/ui/src/shared/Stack';
import { AppLink } from '@packages/ui/src/shared/AppLink';
import { getMangaSiteRoute } from '@packages/model/src/config/router';
import cls from './TabScroll.module.scss';
import { MangaCardInlineSkeleton } from '@/entities/MangaCard';

interface TabScrollProps {
    className?: string;
    children?: ReactNode;
    callback?: () => void;
    disabled?: boolean;
    isFetching?: boolean;
    queryParams?: string;
}

export const TabScroll: FC<TabScrollProps> = (props) => {
    const { className, children, callback, disabled, isFetching, queryParams = '' } = props;

    const skeletons = useMemo(() => {
        return Array(7)
            .fill(0)
            .map((sk, ind) => <MangaCardInlineSkeleton key={ind} />);
    }, []);

    return (
        <div className={className}>
            {children}
            {isFetching && <VStack>{skeletons.map((sk) => sk)}</VStack>}

            {!disabled ? (
                <Button
                    max
                    onPress={() => !disabled && setTimeout(() => callback?.(), 200)}
                    theme="fill"
                >
                    Показать еще
                </Button>
            ) : (
                <AppLink className={cls.link} to={`${getMangaSiteRoute.catalog()}?${queryParams}`}>
                    В Каталог
                </AppLink>
            )}
        </div>
    );
};
