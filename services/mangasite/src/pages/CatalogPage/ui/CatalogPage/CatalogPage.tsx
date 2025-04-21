import { FC, useCallback } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { Page } from '@packages/ui/src/shared/Page';
import { isMobile } from 'react-device-detect';
import { useQueryClient } from '@tanstack/react-query';
import { useKeyBoardEvent } from '@packages/model/src/lib/hooks/useKeyBoardEvent';
import { CatalogContent } from '../CatalogContent/CatalogContent';
import cls from './CatalogPage.module.scss';
import { CatalogFilters } from '@/features/CatalogFilters';
import { CatalogApi } from '@/shared/api/mangaList';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage: FC<CatalogPageProps> = (props) => {
    const { className } = props;
    const queryClient = useQueryClient();

    const onApplyFilters = useCallback(() => {
        queryClient.invalidateQueries({
            queryKey: CatalogApi.getMangaInfinityQueryOptions(() => ({}) as never).queryKey,
        });
    }, [queryClient]);

    useKeyBoardEvent(onApplyFilters, 'Enter');

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
