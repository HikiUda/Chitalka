import { memo } from 'react';

import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { getFlex, HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Button } from '@packages/ui/src/shared/Button';
import StarSvg from '@packages/ui/src/assets/icon/common/star.svg';
import { toShortcutNumber } from '@packages/model/src/lib/helpers/toShortcutNumber/toShortcutNumber';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { useQuery } from '@tanstack/react-query';
import { isMobile } from 'react-device-detect';
import cls from './MangaTitle.module.scss';
import { RateModal } from '@/features/RateModal';
import { RateMangaApi } from '@/shared/api/individualManga';

interface RateProps {
    className?: string;
    rate: number;
    countRate: number;
    mangaId: MangaIdType;
}

export const Rate = memo((props: RateProps) => {
    const { className, rate, countRate, mangaId } = props;
    const { data } = useQuery(RateMangaApi.getUserRateQueryOptions(mangaId));
    const rateBtn = (
        <Button
            theme="fill"
            color="secondary"
            className={classNames(cls.rateBtn, {}, [getFlex({ gap: '4' })])}
        >
            {!data?.rate && <Icon Svg={StarSvg} size={20} />}
            {data?.rate ? `${data.rate}` : 'Оценить'}
            {!!data?.rate && <Icon Svg={StarSvg} size={15} />}
        </Button>
    );
    return (
        <div
            className={classNames(className, { [cls.backgroundRate]: isMobile }, [
                getFlex(isMobile ? {} : { align: 'end', direction: 'column' }),
            ])}
        >
            <HStack gap="4" align="end">
                <Icon Svg={StarSvg} size={28} />
                <span className={cls.rate}>{rate}</span>
                <span className={cls.rateNumber}>{toShortcutNumber(countRate || 0)}</span>
            </HStack>
            <RateModal button={rateBtn} mangaId={mangaId} />
        </div>
    );
});
