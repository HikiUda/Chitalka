import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';
import HistoryBackSvg from '@/shared/assets/icon/common/historyBack.svg';
import CrossoutSvg from '@/shared/assets/icon/common/crossout.svg';
import { classNames } from '@/shared/lib/helpers/classNames';
import { useDeleteUserLastSearchQuery } from '../../model/api/useDeleteUserLastSearchQuery';
import cls from './ResentSearch.module.scss';

interface ResentSearchItemProps {
    className?: string;
    children?: string;
    onSelectSearch?: (value: string) => void;
}

export const ResentSearchItem = memo((props: ResentSearchItemProps) => {
    const { className, children, onSelectSearch } = props;
    const { deleteLastSearch, getIsPending } = useDeleteUserLastSearchQuery();

    const handleDelete = useCallback(
        (value: string | undefined) => {
            if (value) {
                deleteLastSearch(value);
            }
        },
        [deleteLastSearch],
    );

    return (
        <HStack
            onClick={() => children && onSelectSearch?.(children)}
            max
            className={classNames(
                cls.ResentSearchItem,
                { [cls.disabled]: getIsPending(children || '') },
                [className],
            )}
        >
            <Icon Svg={HistoryBackSvg} width={20} height={20} />
            <p className={cls.itemChild}>{children}</p>
            <Button
                isDisabled={getIsPending(children || '')}
                theme="clear"
                noHover
                onPress={() => handleDelete(children)}
            >
                <Icon Svg={CrossoutSvg} width={12} height={12} />
            </Button>
        </HStack>
    );
});
