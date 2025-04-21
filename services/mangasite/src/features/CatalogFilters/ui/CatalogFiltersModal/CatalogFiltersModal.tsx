import { FC } from 'react';
import { ModalSidebar } from '@packages/ui/src/shared/ModalSidebar';
import { Button } from '@packages/ui/src/shared/Button';
import ArrowSvg from '@packages/ui/src/assets/icon/common/arrow.svg';
import FilterSvg from '@packages/ui/src/assets/icon/common/filter.svg';
import { Icon } from '@packages/ui/src/shared/Icon';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import CatalogFilters from '../CatalogFilters/CatalogFilters';
import cls from './CatalogFiltersModal.module.scss';

interface CatalogFiltersModalProps {
    className?: string;
    onApply?: () => void;
}

export const CatalogFiltersModal: FC<CatalogFiltersModalProps> = (props) => {
    const { className, onApply } = props;

    return (
        <ModalSidebar
            className={className}
            trigger={
                <Button theme="clear" color="none" noHover className={getFlex({ gap: '4' })}>
                    <Icon Svg={FilterSvg} />
                    Фильтры
                </Button>
            }
        >
            <Button
                theme="clear"
                noHover
                className={classNames(cls.trigger, {}, [getFlex()])}
                slot="close"
            >
                <Icon className={cls.arrow} Svg={ArrowSvg} />
                Фильтры
            </Button>
            <CatalogFilters onApply={onApply} />
        </ModalSidebar>
    );
};
