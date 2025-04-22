import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { VStack } from '@packages/ui/src/shared/Stack';
import { TriStateCheckboxGroup } from '@packages/ui/src/shared/TriStateCheckbox';
import { Divider } from '@packages/ui/src/shared/Divider';
import { Button } from '@packages/ui/src/shared/Button';
import { useUrlSearchParams } from '@packages/model/src/lib/hooks/useUrlSearchParams';
import { NavButtons } from '../NavButtons/NavButtons';
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { useCatalogFiltersStore } from '../../../model/store/catalogFiltersStore';
import cls from './TagsList.module.scss';

interface TagsListProps {
    className?: string;
    onBack?: () => void;
    onApply?: () => void;
}

export const TagsList: FC<TagsListProps> = (props) => {
    const { className, onApply, onBack } = props;

    const { setSearchParam } = useUrlSearchParams();

    const tags = useCatalogFiltersStore.use.tags();
    const notTags = useCatalogFiltersStore.use.notTags();
    const setTags = useCatalogFiltersStore.use.setTags();
    const setNotTags = useCatalogFiltersStore.use.setNotTags();
    const resetTags = useCatalogFiltersStore.use.resetTags();

    const handleSetTags = (arr: number[]) => {
        setTags(arr);
        setSearchParam('tags', arr.join(','));
    };
    const handleSetNotTags = (arr: number[]) => {
        setNotTags(arr);
        setSearchParam('notTags', arr.join(','));
    };

    return (
        <VStack justify="start" className={classNames(cls.TagsList, {}, [className])}>
            <NavButtons title="Теги" onBack={onBack} onReset={resetTags} />
            <Divider />
            <TriStateCheckboxGroup
                include={tags}
                exclude={notTags}
                onChangeInclude={handleSetTags}
                onChangeExclude={handleSetNotTags}
            >
                <CategoriesList
                    categories={[
                        { id: 1, title: 'Magic' },
                        { id: 2, title: 'GG Woman' },
                        { id: 3, title: 'Alhimia' },
                    ]}
                />
            </TriStateCheckboxGroup>
            <Button slot="close" onPress={onApply} theme="fill" max>
                Применить
            </Button>
        </VStack>
    );
};
