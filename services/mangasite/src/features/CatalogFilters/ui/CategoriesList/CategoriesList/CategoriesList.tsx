import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { TriStateCheckbox } from '@packages/ui/src/shared/TriStateCheckbox';
import Skeleton from 'react-loading-skeleton';
import cls from './CategoriesList.module.scss';
import { CategoriesType } from '@/shared/api/categoriesApi';

interface CategoriesListProps {
    className?: string;
    categories?: CategoriesType[];
    isLoading?: boolean;
}

export const CategoriesList: FC<CategoriesListProps> = (props) => {
    const { className, categories, isLoading } = props;

    return (
        <VStack justify="start" className={classNames(cls.CategoriesList, {}, [className])}>
            {categories?.map((category) => (
                <TriStateCheckbox key={category.id} value={category.id} label={category.title} />
            ))}
            {isLoading && <Skeleton width={200} height={24} count={20} />}
        </VStack>
    );
};
