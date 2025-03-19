import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Heading } from '@packages/ui/src/shared/Heading';
import { CollectionCard } from '@packages/ui/src/entities/CollectionCard';
import cls from './SelectionOfCollections.module.scss';

interface SelectionOfCollectionsProps {
    className?: string;
}

export const SelectionOfCollections: FC<SelectionOfCollectionsProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Heading className={cls.title} HeaderTag="h2" color="primary">
                Коллекции других пользователей
            </Heading>
            <div className={cls.collectionList}>
                {[1, 2, 3, 4, 5, 6].map((collection, ind) => (
                    <CollectionCard key={ind} />
                ))}
            </div>
        </div>
    );
};
