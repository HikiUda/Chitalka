import { FC, ReactNode, useMemo } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Button } from '@packages/ui/src/shared/Button';
import { MangaCardInlineSkeleton } from '@packages/ui/src/entities/MangaCard';
import { VStack } from '@packages/ui/src/shared/Stack';
import cls from './TabScroll.module.scss';

interface TabScrollProps {
    className?: string;
    children?: ReactNode;
    callback?: () => void;
    disabled?: boolean;
    isFetching?: boolean;
}

export const TabScroll: FC<TabScrollProps> = (props) => {
    const { className, children, callback, disabled, isFetching } = props;

    const skeletons = useMemo(() => {
        return Array(7)
            .fill(0)
            .map((sk, ind) => <MangaCardInlineSkeleton key={ind} />);
    }, []);

    return (
        <div className={classNames(cls.TabScroll, {}, [className])}>
            {children}
            {isFetching && <VStack>{skeletons.map((sk) => sk)}</VStack>}
            <Button isDisabled={disabled} max onPress={callback} theme="fill">
                {disabled ? 'Кажеться это все' : 'Показать еще'}
            </Button>
        </div>
    );
};
