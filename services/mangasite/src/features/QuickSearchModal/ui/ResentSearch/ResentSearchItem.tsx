import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import { memo, useCallback } from 'react';
import HistoryBackSvg from '@packages/ui/src/assets/icon/common/historyBack.svg';
import CrossoutSvg from '@packages/ui/src/assets/icon/common/crossout.svg';
import { classNames } from '@packages/model/src/lib/classNames';
import { useDeleteUserLastSearchQuery } from '../../model/api/useDeleteUserLastSearchQuery';
import { useSearchInputStore } from '../../model/store/SearchInput';
import { useQuickSearchManga } from '../../model/api/useQuickSearchManga';
import cls from './ResentSearch.module.scss';

interface ResentSearchItemProps {
    className?: string;
    children?: string;
}

export const ResentSearchItem = memo((props: ResentSearchItemProps) => {
    const { className, children } = props;
    const deleteSearchQuery = useDeleteUserLastSearchQuery();

    const setSearch = useSearchInputStore((state) => state.setSearch);
    const { refetch } = useQuickSearchManga({ search: children || '' });

    const handleSelectSearch = (value: string | undefined) => {
        if (value) {
            setSearch(value);
            refetch();
        }
    };

    const handleDelete = useCallback(
        (value: string | undefined) => {
            if (value) {
                deleteSearchQuery(value);
            }
        },
        [deleteSearchQuery],
    );

    return (
        <HStack
            onClick={() => handleSelectSearch(children)}
            max
            className={classNames(cls.ResentSearchItem)}
        >
            <Icon Svg={HistoryBackSvg} width={20} height={20} />
            <p className={cls.itemChild}>{children}</p>
            <Button theme="clear" noHover onPress={() => handleDelete(children)}>
                <Icon Svg={CrossoutSvg} width={12} height={12} />
            </Button>
        </HStack>
    );
});
