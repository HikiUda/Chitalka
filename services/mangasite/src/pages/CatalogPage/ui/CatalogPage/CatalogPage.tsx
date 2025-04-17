import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Page } from '@packages/ui/src/shared/Page';
import { isMobile } from 'react-device-detect';
import { CatalogContent } from '../CatalogContent/CatalogContent';
import cls from './CatalogPage.module.scss';
import { CatalogFilters } from '@/features/CatalogFilters';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.CatalogPage, {}, [className])}>
            <div className={classNames(cls.wrapper)}>
                <CatalogContent className={cls.catalog} />
                {!isMobile && (
                    <div className={cls.filters}>
                        <CatalogFilters />
                    </div>
                )}
            </div>
        </Page>
    );
};
export default CatalogPage;
