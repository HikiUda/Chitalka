import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import HistoryBackSvg from '@packages/ui/src/assets/icon/common/historyBack.svg';
import CrossoutSvg from '@packages/ui/src/assets/icon/common/crossout.svg';
import { Icon } from '@packages/ui/src/shared/Icon/Icon';
import { HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Button } from '@packages/ui/src/shared/Button';
import cls from './ResentSearch.module.scss';

interface ResentSearchProps {
    className?: string;
}

interface ResentSearchItemProps {
    className?: string;
    children?: ReactNode;
}

export const ResentSearch = memo((props: ResentSearchProps) => {
    const { className } = props;
    const items = [
        'item',
        'biba',
        'boba & alksfjlakdsjflkasjflkadsjlf;ajsdlkfajkdlfjdlskfja;lksdjf;laksjflkdsajf;lakdjflksadjf;la adsfadsfadsfadfadfasdfasf',
    ];
    return (
        <VStack className={classNames('', {}, [className])}>
            {items?.map((item, ind) => <ResentSearchItem key={ind}>{item}</ResentSearchItem>)}
        </VStack>
    );
});

export const ResentSearchItem = memo((props: ResentSearchItemProps) => {
    const { className, children } = props;

    const deleteItem = useCallback(() => {}, []);

    return (
        <HStack max className={classNames(cls.ResentSearchItem)}>
            <Icon Svg={HistoryBackSvg} width={20} height={20} />
            <p className={cls.itemChild}>{children}</p>
            <Button theme="clear" noHover onPress={deleteItem}>
                <Icon Svg={CrossoutSvg} width={12} height={12} />
            </Button>
        </HStack>
    );
});
