import { memo } from 'react';

import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex, HStack, VStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@packages/ui/src/shared/Button';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import cls from './MangaTitle.module.scss';
import { RateModal } from '@/features/RateModal';

interface RateProps {
    className?: string;
    rate?: number;
    countRate?: number;
    isLoading?: boolean;
}

export const Rate = memo((props: RateProps) => {
    const { className, rate, countRate, isLoading } = props;
    const rateBtn = (
        <Button theme="fill" color="secondary" className={classNames(cls.rateBtn, {}, [getFlex()])}>
            <Icon Svg={StarSvg} width={20} hanging={20} />
            Оценить
        </Button>
    );
    return (
        <VStack className={className} align="end">
            {isLoading ? (
                <>
                    <Skeleton width={80} height={20} />
                    <Skeleton width={120} height={30} />
                </>
            ) : (
                <>
                    <HStack gap="4" align="end">
                        <Icon Svg={StarSvg} width={28} hanging={28} />
                        <span className={cls.rate}>{rate}</span>
                        <span className={cls.rateNumber}>{toShortcutNumber(countRate || 0)}</span>
                    </HStack>
                    <RateModal button={rateBtn} />
                </>
            )}
        </VStack>
    );
});
