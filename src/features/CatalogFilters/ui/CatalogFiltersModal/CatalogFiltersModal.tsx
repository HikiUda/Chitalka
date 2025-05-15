import { FC } from 'react';
import CatalogFilters from '../CatalogFilters/CatalogFilters';
import cls from './CatalogFiltersModal.module.scss';
import { ModalSidebar } from '@/shared/deprecate-ui/ModalSidebar';
import { Button } from '@/shared/deprecate-ui/Button';
import ArrowSvg from '@/shared/assets/icon/common/arrow.svg?react';
import FilterSvg from '@/shared/assets/icon/common/filter.svg?react';
import { Icon } from '@/shared/deprecate-ui/Icon';
import { getFlex } from '@/shared/deprecate-ui/Stack';
import { classNames } from '@/shared/lib/helpers/classNames';

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
                <Button
                    data-testid="CatalogFiltersModal-Button"
                    theme="clear"
                    color="none"
                    noHover
                    className={getFlex({ gap: '4' })}
                >
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
