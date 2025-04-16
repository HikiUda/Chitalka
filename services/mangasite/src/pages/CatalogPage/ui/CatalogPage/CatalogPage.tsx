import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Page } from '@packages/ui/src/shared/Page';
import { getFlex } from '@packages/ui/src/shared/Stack';
import { isMobile } from 'react-device-detect';
import { CatalogContent } from '../CatalogContent/CatalogContent';
import cls from './CatalogPage.module.scss';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.CatalogPage, {}, [className])}>
            <div className={getFlex({ align: 'start', gap: '16' })}>
                <CatalogContent className={cls.catalog} />
                {!isMobile && <div className={cls.filters}>filters</div>}
            </div>
        </Page>
    );
};
export default CatalogPage;
