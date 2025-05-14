import { FC, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/layout/Page';
import { isMobile } from 'react-device-detect';
import { useQueryClient } from '@tanstack/react-query';
import { useKeyBoardEvent } from '@/shared/lib/hooks/useKeyBoardEvent';
import { CatalogContent } from '../CatalogContent/CatalogContent';
import cls from './CatalogPage.module.scss';
import { CatalogFilters, useSetCatalogFiltersFromSearchParams } from '@/features/CatalogFilters';
import { CatalogApi } from '@/shared/api/deprecated/mangaList';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props;

    const [init, setInit] = useState(false);
    const queryClient = useQueryClient();

    const onApplyFilters = useCallback(() => {
        queryClient.invalidateQueries({
            queryKey: CatalogApi.getMangaInfinityQueryOptions(() => ({}) as never).queryKey,
        });
    }, [queryClient]);

    useKeyBoardEvent(onApplyFilters, 'Enter');

    const setInitialFilters = useSetCatalogFiltersFromSearchParams();

    useEffect(() => {
        setInitialFilters();
        setInit(true);
        return () => {
            queryClient.removeQueries({
                queryKey: CatalogApi.getMangaInfinityQueryOptions(() => ({}) as never).queryKey,
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //TODO add loader
    if (!init) return null;

    return (
        <Page className={classNames(cls.CatalogPage, {}, [className])}>
            <div className={classNames(cls.wrapper)}>
                <CatalogContent className={cls.catalog} />
                {!isMobile && (
                    <div className={cls.filters}>
                        <CatalogFilters onApply={onApplyFilters} />
                    </div>
                )}
            </div>
        </Page>
    );
};
export default CatalogPage;
