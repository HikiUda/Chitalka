import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { TriStateCheckbox } from '@packages/ui/src/shared/TriStateCheckbox';
import cls from './CategoriesList.module.scss';
import { MangaCategoriesType } from '@/shared/api/individualManga';

interface CategoriesListProps {
    className?: string;
    categories?: MangaCategoriesType[];
}

export const CategoriesList: FC<CategoriesListProps> = (props) => {
    const { className, categories } = props;

    return (
        <VStack justify="start" className={classNames(cls.CategoriesList, {}, [className])}>
            {categories?.map((category) => (
                <TriStateCheckbox key={category.id} value={category.id} label={category.title} />
            ))}
        </VStack>
    );
};
