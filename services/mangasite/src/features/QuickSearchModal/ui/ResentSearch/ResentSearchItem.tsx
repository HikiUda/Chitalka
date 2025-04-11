import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { memo, useCallback } from 'react';
import HistoryBackSvg from '@packages/ui/src/assets/icon/common/historyBack.svg';
import CrossoutSvg from '@packages/ui/src/assets/icon/common/crossout.svg';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
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
