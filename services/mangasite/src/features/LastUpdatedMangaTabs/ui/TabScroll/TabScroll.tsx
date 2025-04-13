import { FC, ReactNode, useMemo } from 'react';
import { Button } from '@packages/ui/src/shared/Button';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './TabScroll.module.scss';
import { MangaCardInlineSkeleton } from '@/entities/MangaCard';

interface TabScrollProps {
    className?: string;
    children?: ReactNode;
    setPage: (v: number) => void;
    page: number;
    hasNext: boolean;
}

export const TabScroll: FC<TabScrollProps> = (props) => {
    const { className, children, setPage, page, hasNext } = props;

    const skeletons = useMemo(() => {
        return Array(7)
            .fill(0)
            .map((sk, ind) => <MangaCardInlineSkeleton key={ind} />);
    }, []);

    return (
        <div className={className}>
            {children}
            <HStack>
                <Button className={cls.button} onPress={() => setPage(1)} theme="fill">
                    1
                </Button>
                <Button
                    className={cls.button}
                    isDisabled={page === 1}
                    onPress={() => setPage(Math.min(1, page - 1))}
                    theme="fill"
                >
                    prev
                </Button>
                <Button
                    className={cls.button}
                    isDisabled={!hasNext}
                    onPress={() => hasNext && setPage(page + 1)}
                    theme="fill"
                >
                    next
                </Button>
            </HStack>
        </div>
    );
};
