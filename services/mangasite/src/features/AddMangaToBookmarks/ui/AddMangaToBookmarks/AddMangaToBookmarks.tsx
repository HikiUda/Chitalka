import { memo, useState } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { BigFill, Key, Select, SelectItem } from '@packages/ui/src/shared/Select';
import cls from './AddMangaToBookmarks.module.scss';

interface AddMangaToBookmarksProps {
    className?: string;
}

const items = [
    { id: 1, text: 'Читаю' },
    { id: 2, text: 'В планах' },
    { id: 3, text: 'Бросил' },
];

export const AddMangaToBookmarks = memo((props: AddMangaToBookmarksProps) => {
    const { className } = props;
    const [bookmark, setBookmark] = useState<Key>();

    return (
        <Select
            placeholder="+ Добавить в закладки"
            items={items}
            selectedKey={bookmark}
            onSelectionChange={setBookmark}
            className={classNames(cls.AddMangaToBookmarks, {}, [className])}
            selectButton={<BigFill />}
            max
        >
            {(item) => <SelectItem id={item.id}>{item.text}</SelectItem>}
        </Select>
    );
});
