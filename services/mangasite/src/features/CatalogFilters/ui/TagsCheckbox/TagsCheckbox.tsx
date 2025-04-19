import { FC } from 'react';
import { TriStateCheckbox, TriStateCheckboxGroup } from '@packages/ui/src/shared/TriStateCheckbox';
import { HStack } from '@packages/ui/src/shared/Stack';
import { useCatalogFiltersStore } from '../../model/store/catalogFiltersStore';

interface TagsCheckboxProps {
    className?: string;
}

export const TagsCheckbox: FC<TagsCheckboxProps> = (props) => {
    const { className } = props;

    const tags = useCatalogFiltersStore.use.tags();
    const notTags = useCatalogFiltersStore.use.notTags();
    const setTags = useCatalogFiltersStore.use.setTags();
    const setNotTags = useCatalogFiltersStore.use.setNotTags();

    return (
        <TriStateCheckboxGroup
            include={tags}
            exclude={notTags}
            onChangeInclude={setTags}
            onChangeExclude={setNotTags}
            className={className}
        >
            <HStack gap="16" justify="start" wrap="wrap">
                <TriStateCheckbox value={3} label="3" />
                <TriStateCheckbox value={4} label="4" />
            </HStack>
        </TriStateCheckboxGroup>
    );
};
